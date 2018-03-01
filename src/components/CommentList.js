import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'

// Action Dispatchers
import { fetchPostComments } from '../actions'

class CommentList extends Component {

	componentDidMount = () => this.props.getPostComments(this.props.postId)

	render(){

		const { comments, postId } = this.props

		return(
			<div className="comment-list">
				{/* Only iterate through if the property exists on the object */}
				{comments[postId] && comments[postId].map(comment => (
					<Comment key={comment.id} author={comment.author} text={comment.body} timestamp={comment.timestamp}/>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	comments: state.comments
})

const mapDispatchToProps = dispatch => ({
	getPostComments: (postId) => dispatch(fetchPostComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps) (CommentList)