import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class Alert extends Component {
	render(){

		const { open, title, text, closeAlert, confirm } = this.props

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={closeAlert}
			/>,
			<FlatButton
				label="Ok"
				primary={true}
				onClick={confirm}
			/>
		]

		return(
			<Dialog
				open={open}
				actions={actions}
				title={title}
				modal={true}
			>
			{text}
			</Dialog>
		)
	}
}

export default Alert