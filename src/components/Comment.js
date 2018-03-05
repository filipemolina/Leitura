import React, { Component } from 'react'
import dateFormat from 'dateformat'
import Votes from './Votes'

// Material UI imports
import { Card, CardHeader} from 'material-ui/Card'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

class Comment extends Component {
	render(){

		const { author, text, timestamp, voteScore } = this.props

		return(
			<Card className="comment">
				<CardHeader
					title={author}
					subtitle={text}
					avatar="https://picsum.photos/150"
					showExpandableButton={true}
					openIcon={<NavigationClose onClick={() => this.props.handleDeleteComment()}/>}
					closeIcon={<NavigationClose onClick={() => this.props.handleDeleteComment()}/>}
				/>
				<div className="comment-actions">
					<div className="comment-timestamp">{dateFormat(timestamp, "mmmm dS yyyy h:MMTT")}</div>
					<Votes score={voteScore} />
				</div>
			</Card>
		)
	}
}

export default Comment