import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'

// Material UI Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { orange500, orange700, grey500, yellow600 } from 'material-ui/styles/colors'

class App extends Component {

  state = {
    menuIsOpen: false,
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

  render() {
    return (
      <MuiThemeProvider muiTheme={this.newTheme}>
        <Route exact path="/" render={() => (
          <div className="App">
            <HomePage />  
          </div>
        )}/>
      </MuiThemeProvider>
    )
  }
}

export default App
