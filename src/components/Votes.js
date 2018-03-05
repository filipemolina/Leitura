import React, { Component } from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'

class Votes extends Component {
	render(){

		const { score } = this.props

		return(
			<div className="votes-wrapper">
				<div className="votes-component">
					<IconButton tooltip="Add a Vote" tooltipPosition="top-center">
						<ActionThumbUp />
					</IconButton>
					<div className="votes-component-count">
						{`Score: ${score}`}
					</div>
					<IconButton tooltip="Subtract a Vote" tooltipPosition="top-center">
						<ActionThumbDown />
					</IconButton>
				</div>
			</div>
		)
	}
}

export default Votes