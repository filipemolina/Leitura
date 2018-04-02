import React from 'react'
import './AddPostButton.css'

//Material Ui imports
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const AddPostButton = props => {
	return(
		<FloatingActionButton className="fab" onClick={props.handleOpen}>
			<ContentAdd />
		</FloatingActionButton>
	)
}

export default AddPostButton