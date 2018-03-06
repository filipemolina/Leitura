import React, { Component } from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'

class Votes extends Component {
	render(){

		const { score, addVote, removeVote } = this.props

		return(
			<div className="votes-wrapper">
				<div className="votes-component">
					<IconButton tooltip="Add a Vote" tooltipPosition="top-center">
						<ActionThumbUp onClick={addVote} />
					</IconButton>
					<div className="votes-component-count">
						{`Score: ${score}`}
					</div>
					<IconButton tooltip="Subtract a Vote" tooltipPosition="top-center">
						<ActionThumbDown onClick={removeVote} />
					</IconButton>
				</div>
			</div>
		)
	}
}

export default Votes