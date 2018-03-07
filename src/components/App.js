import React, { Component } from 'react'
import './App.css'
import { Route, withRouter } from 'react-router-dom'
import HomePage from './HomePage'
import SideMenu from './SideMenu'
import PostModal from './PostModal'
import PostDetails from './PostDetails'
import TopBar from './TopBar'
import CategoryPage from './CategoryPage'
import { connect } from 'react-redux'
import sortBy from 'sort-by'

// Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { orange500, orange700, grey500, yellow600 } from 'material-ui/styles/colors'

// Actions
import { 
  fetchCategories, 
  fetchPosts,
  addPost,
  setOrdering 
} from "../actions"


class App extends Component {

  state = {
    isModalOpen: false,
    isMenuOpen: true,
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

  setOrdering = (field, order) => {
    this.props.setOrdering(field, order)
  }

  applyOrdering = (order, array) => {
    return array.sort(sortBy(`${order.order === 'desc' ? "-" + order.field : order.field}`))
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

    const { posts } = this.props

    const orderedPosts = this.applyOrdering(this.props.sortedBy, posts)

    return ( 

      <MuiThemeProvider muiTheme={this.newTheme}>
        <div className="App">

          {/* Top Bar of the application */}
          <TopBar 
            title="Leitura" 
            onLeftIconButtonClick={() => this.toggleMenu()}
            showFilter={true}
            setOrdering={(field, order) => this.props.setOrdering(field, order)}
            order={this.props.sortedBy}
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
                posts={orderedPosts}
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
                posts={orderedPosts}
                location={props.location}
              />
            )} />            

          </div>

          {/* Modal to Add a new post */}
          <PostModal 
            handleCancel={() => this.handleCloseModal()} 
            isModalOpen={this.state.isModalOpen}
            handleConfirm={(post) => this.props.addPost(post)}
            categories={this.props.categories}
          />
          
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  categories: state.categories,
  sortedBy: state.ui.sortedBy
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPosts: () => dispatch(fetchPosts()),
  setOrdering: (field, order) => dispatch(setOrdering(field, order)),
  addPost: (post) => dispatch(addPost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App))
