import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import SideMenu from './SideMenu'
import AddPostModal from './AddPostModal'
import PostDetails from './PostDetails'
import TopBar from './TopBar'
import CategoryPage from './CategoryPage'
import { connect } from 'react-redux'

// Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { orange500, orange700, grey500, yellow600 } from 'material-ui/styles/colors'

// Actions
import { fetchCategories, fetchPosts } from "../actions"

class App extends Component {

  state = {
    isModalOpen: false,
    isMenuOpen: true
  }

  // Customizing the theme using getMuiTheme
  newTheme = getMuiTheme({
    palette: {
      primary1Color: orange500,
      primary2Color: orange700,
      primary3Color: grey500,
      accent1Color: yellow600,
    }
  })

  // Opens and closes the Side Menu
  toggleMenu = () => this.setState((prevState) => ({
    isMenuOpen: !prevState.isMenuOpen
  }))

  // Opens the modal for adding a new post
  handleOpenModal = () => this.setState({
    isModalOpen: true
  })

  // Closes the modal for adding a new post
  handleCloseModal = () => this.setState({
    isModalOpen: false
  })

  componentDidMount = () => {
    this.props.fetchCategories()
    this.props.fetchPosts() 
  }

  render() {

    // Calculate the padding of the main content section based off of wheter the Side menu is open
    let style

    if(this.state.isMenuOpen)
      style = {
        padding: '84px 0 0 256px',
      }
    else
      style = {
        padding: '84px 0 0 0'
      }

    return (
      <MuiThemeProvider muiTheme={this.newTheme}>
        <div className="App">

          {/* Top Bar of the application */}
          <TopBar 
            title="Leitura" 
            onLeftIconButtonClick={() => this.toggleMenu()}
            showFilter={true}
          />

          {/* Side Menu containing navigation links */}
          <SideMenu 
            handleOpenModal={() => this.handleOpenModal()}
            isMenuOpen={this.state.isMenuOpen}
            categories={this.props.categories}
          />

          {/* Here the React Router takes on and controls what is shown in the main content section*/}
          <div className="main-content" style={style}>

            <Route exact path="/" render={() => (
              <HomePage 
                isMenuOpen={this.state.isMenuOpen} 
                handleOpenModal={() => this.handleOpenModal()}
                posts={this.props.posts}
              />  
            )}/>

            <Route path="/post/:id" render={({match}) => (
              <PostDetails match={match}/>
            )} />

            <Route path="/category/:category" render={({match}) => (
              <CategoryPage 
                category={match.params.category}
                handleOpenModal={() => this.handleOpenModal()}
                posts={this.props.posts}
              />
            )} />            

          </div>

          {/* Modal to Add a new post */}
          <AddPostModal handleClose={() => this.handleCloseModal()} isModalOpen={this.state.isModalOpen}/>

        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps) (App)
