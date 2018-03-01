import React, { Component } from 'react'
import dateFormat from 'dateformat'

// Material UI imports
import { Card, CardHeader} from 'material-ui/Card'

class Comment extends Component {
	render(){

		const { author, text, timestamp } = this.props

		return(
			<Card className="comment">
				<CardHeader
					title={author}
					subtitle={text}
					avatar="https://picsum.photos/150"
				/>
				<div className="comment-timestamp">{dateFormat(timestamp, "mmmm dS yyyy h:MMTT")}</div>
			</Card>
		)
	}
}

export default Comment