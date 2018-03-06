import React, { Component } from 'react'
import Post from './Post'
import Alert from './Alert'
import './PostList.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Action Dispatchers
import { deletePost, addVote, removeVote } from '../actions'

class PostList extends Component{

	state = {
		isAlertOpen: false,
		postBeingAlerted: {}
	}

	closeAlert = () => this.setState({
		isAlertOpen: false,
		postBeingAlerted: {}
	})

	openAlert = (post) => this.setState({
		isAlertOpen: true,
		postBeingAlerted: post,
	})

	deletePost = (postId) => {
		this.props.deletePost(postId)
		this.closeAlert()
	}

	render() {

		const { posts, showComments } = this.props
		const { isAlertOpen, postBeingAlerted } = this.state

		return (
			<div className="post-list">
				{posts.map((post) => (
					<Post 
						showComments={showComments} 
						key={post.id} 
						post={post} 
						openDialog={(post) => this.openAlert(post)}
						addVoteHandler={() => this.props.addVote(post.id)}
						removeVoteHandler={() => this.props.removeVote(post.id)}
					/>
				))}

				{ isAlertOpen && (	
					<Alert
						open={isAlertOpen}
						title="Attention!"
						text={`You are about to delete the post "${postBeingAlerted.title}". Do you wish to proceed?`}
						closeAlert={() => this.closeAlert()}
						confirm={() => this.deletePost(postBeingAlerted.id)}
					/>
				)}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	deletePost: postId => dispatch(deletePost(postId)),
	addVote: postId => dispatch(addVote(postId)),
	removeVote: postId => dispatch(removeVote(postId))
})

export default withRouter(connect(null, mapDispatchToProps) (PostList))