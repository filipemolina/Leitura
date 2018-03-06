import React, { Component } from 'react'
import dateFormat from 'dateformat'
import Votes from './Votes'
import CardTop from './CardTop'

// Material UI imports
import { Card } from 'material-ui/Card'

class Comment extends Component {
	render(){

		const { author, text, timestamp, voteScore, handleDeleteComment } = this.props

		// TODO: Extrair o CardHeader para outro componente

		return(
			<Card className="comment">
				<CardTop
					title={author}
					text={text}
					handleDelete={handleDeleteComment}
				/>
				<div className="comment-actions">
					<div className="comment-timestamp">{dateFormat(timestamp, "mmmm dS yyyy h:MMTT")}</div>
					<Votes score={voteScore} addVote={this.props.addVote} removeVote={this.props.removeVote}/>
				</div>
			</Card>
		)
	}
}

export default Comment