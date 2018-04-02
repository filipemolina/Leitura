import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

// Material UI imports
import CardText from 'material-ui/Card/CardText'

const CommentSection  = props => {

	const { isOpen } = props

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
			<CommentList postId={props.postId}/>
			<CommentForm postId={props.postId}/>
		</CardText>
	)
}

export default CommentSection