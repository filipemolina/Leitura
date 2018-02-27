import React, { Component } from 'react'
import './AddPostButton.css'

//Material Ui imports
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class AddPostButton extends Component{
	render(){

		//<Link style={style} className="fab" to="/addPost"><ContentAdd color={"#fff"}/></Link>

		// Set the css of the button to use the color of the theme that will come through the props
    // because of the muiThemeable HOC
    // const style = {
    //   backgroundColor: this.props.muiTheme.palette.primary1Color,
    // }

		return(
			<FloatingActionButton className="fab" onClick={this.props.handleOpen}>
				<ContentAdd />
			</FloatingActionButton>
		)
	}
}

export default AddPostButton