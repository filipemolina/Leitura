import React, { Component } from 'react'
import './App.css'
import { Route, withRouter } from 'react-router-dom'
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

  // Returns a post object from the store by id
  getPostById = id => {
    console.log("ID", id, "POSTS", this.props.posts)
    return this.props.posts.filter(post => post.id === id)
  }

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

            <Route exact path="/" render={(props) => (
              <HomePage 
                isMenuOpen={this.state.isMenuOpen} 
                handleOpenModal={() => this.handleOpenModal()}
                posts={this.props.posts}
                location={props.location}
              />  
            )}/>

            <Route path="/post/:id" render={(props) => (
              <PostDetails 
                postId={props.match.params.id} 
                location={props.location}
              />
            )} />

            <Route path="/category/:category" render={(props) => (
              <CategoryPage 
                category={props.match.params.category}
                handleOpenModal={() => this.handleOpenModal()}
                posts={this.props.posts}
                location={props.location}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App))
