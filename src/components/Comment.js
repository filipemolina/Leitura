import React, { Component } from 'react'
import dateFormat from 'dateformat'
import Votes from './Votes'
import CardTop from './CardTop'

// Material UI imports
import { Card } from 'material-ui/Card'

class Comment extends Component {

	state = {
		isEditing: false
	}

	openEditField = () => this.setState({
		isEditing: true
	})

	closeEditField = (text) => {

		if(text.trim())
			this.props.handleEditComment(this.props.comment.id, text)

		this.setState({
			isEditing: false
		})
	}

	render(){

		const { comment, handleDeleteComment } = this.props
		const { isEditing } = this.state

		return(
			<Card className="comment">
				<CardTop
					title={comment.author}
					text={comment.body}
					isEditing={isEditing}
					handleDelete={handleDeleteComment}
					handleEdit={() => this.openEditField()}
					handleStopEditing={(text) => this.closeEditField(text)}
				/>
				<div className="comment-actions">
					<div className="comment-timestamp">{dateFormat(comment.timestamp, "mmmm dS yyyy h:MMTT")}</div>
					<Votes score={comment.voteScore} addVote={this.props.addVote} removeVote={this.props.removeVote}/>
				</div>
			</Card>
		)
	}
}

export default Comment