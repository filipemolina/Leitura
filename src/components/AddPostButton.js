import React, { Component } from 'react'
import './AddPostButton.css'

//Material Ui imports
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class AddPostButton extends Component{
	render(){
		return(
			<FloatingActionButton className="fab" onClick={this.props.handleOpen}>
				<ContentAdd />
			</FloatingActionButton>
		)
	}
}

export default AddPostButton