import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import AppBar from 'material-ui/AppBar'
import SideMenu from './SideMenu'
import AddPostModal from './AddPostModal'

// Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { orange500, orange700, grey500, yellow600 } from 'material-ui/styles/colors'

class App extends Component {

  state = {
    isModalOpen: false
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

  // Opens the modal for adding a new post
  handleOpenModal = () => this.setState({
    isModalOpen: true
  })

  // Closes the modal for adding a new post
  handleCloseModal = () => this.setState({
    isModalOpen: false
  })

  render() {
    return (
      <MuiThemeProvider muiTheme={this.newTheme}>
        <div className="App">

          {/* Top Bar of the application */}
          <AppBar title="Leitura" style={{ position: 'fixed' }} onLeftIconButtonClick={this.props.handleOpenMenu}/>

          {/* Side Menu containing navigation links */}
          <SideMenu handleOpenModal={() => this.handleOpenModal()}/>

          {/* Here the React Router takes on and control what is shown in the main content section*/}
          <Route exact path="/" render={() => (
            <HomePage 
              isMenuOpen={this.state.isMenuOpen} 
              handleOpenModal={() => this.handleOpenModal()}
            />  
          )}/>

          {/* Modal to Add a new post */}
          <AddPostModal handleClose={() => this.handleCloseModal()} isModalOpen={this.state.isModalOpen}/>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
