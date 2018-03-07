import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import sortBy from 'sort-by'

// Action Dispatchers
import { fetchPostComments, deleteComment, editComment, addCommentVote, removeCommentVote } from '../actions'

class CommentList extends Component {

	componentDidMount = () => this.props.getPostComments(this.props.postId)

	render(){

		const { comments, postId } = this.props

		const showingComments = comments.sort(sortBy("-voteScore"))

		return(
			<div className="comment-list">
				{/* Only iterate through if the property exists on the object */}
				{showingComments.filter(comment => comment.parentId === postId).map(comment => (
					<Comment 
						key={comment.id} 
						comment={comment}
						addVote={() => this.props.addVote(comment.id)}
						removeVote={() => this.props.removeVote(comment.id)}
						handleDeleteComment={() => this.props.deleteComment(comment.id)}
						handleEditComment={this.props.editComment}
					/>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	comments: state.comments
})

const mapDispatchToProps = dispatch => ({
	getPostComments: postId => dispatch(fetchPostComments(postId)),
	deleteComment: commentId => dispatch(deleteComment(commentId)),
	addVote: commentId => dispatch(addCommentVote(commentId)),
	removeVote: commentId => dispatch(removeCommentVote(commentId)),
	editComment: (commentId, comment) => dispatch(editComment(commentId, comment))
})

export default connect(mapStateToProps, mapDispatchToProps) (CommentList)