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
          <AppBar title="Leitura" style={{ position: 'fixed' }} onLeftIconButtonClick={() => this.toggleMenu()}/>

          {/* Side Menu containing navigation links */}
          <SideMenu 
            handleOpenModal={() => this.handleOpenModal()}
            isMenuOpen={this.state.isMenuOpen}
          />

          {/* Here the React Router takes on and controls what is shown in the main content section*/}
          <div className="main-content" style={style}>

            <Route exact path="/" render={() => (
              <HomePage 
                isMenuOpen={this.state.isMenuOpen} 
                handleOpenModal={() => this.handleOpenModal()}
              />  
            )}/>

            <Route path="/post" render={() => (
              
            )}

          </div>

          {/* Modal to Add a new post */}
          <AddPostModal handleClose={() => this.handleCloseModal()} isModalOpen={this.state.isModalOpen}/>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
