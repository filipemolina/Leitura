import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Material Ui imports
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

class AddPostButton extends Component{
	render(){

		// Set the css of the button to use the color of the theme that will come through the props
    // because of the muiThemeable HOC
    const style = {
      backgroundColor: this.props.muiTheme.palette.primary1Color,
    }

		return(
			<Link style={style} className="fab" to="/addPost"><ContentAdd color={"#fff"}/></Link>
		)
	}
}

export default muiThemeable() (AddPostButton)