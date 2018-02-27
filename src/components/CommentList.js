import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
	render(){
		return(
			<div className="comment-list">
				<Comment key="1" author="John Doe" text="Test of first comment" />
				<Comment key="2" author="Filipe Molina" text="Parangarico Tirimirruaro" />
				<Comment key="3" author="Mr. Pink" text="I never tip!" />
			</div>
		)
	}
}

export default CommentList