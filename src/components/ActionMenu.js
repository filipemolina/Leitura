import React, { Component } from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ImageEdit from 'material-ui/svg-icons/image/edit'
import ActionDelete from 'material-ui/svg-icons/action/delete'

class ActionMenu extends Component {
	render(){

		const { handleDelete, handleEdit } = this.props

		return(
			<IconMenu
				iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			>
				<MenuItem leftIcon={<ImageEdit />} primaryText="Edit" onClick={handleEdit} />
				<MenuItem leftIcon={<ActionDelete />} primaryText="Delete" onClick={handleDelete} />
			</IconMenu>
		)
	}
}

export default ActionMenu