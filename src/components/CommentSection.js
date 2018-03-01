import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

// Material UI imports
import CardText from 'material-ui/Card/CardText'

class CommentSection extends Component {
	render(){

		const { isOpen, postId } = this.props

		let style

		if(!isOpen)
			style = {
				height: "0",
				overflow: 'hidden',
				padding: "0",
				border: "0",
			}
		else
			style = {
				height: 'auto'
			}

		return(
			<CardText className="comment-section" style={style}>
				<CommentList postId={this.props.postId}/>
				<CommentForm />
			</CardText>
		)
	}
}

export default CommentSection