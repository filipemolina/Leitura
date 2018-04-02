import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const Alert = props => {

	const { open, title, text, closeAlert, confirm } = props

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

export default Alert