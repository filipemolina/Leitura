import React, { Component } from 'react'
import Post from './Post'
import Alert from './Alert'
import Page404 from './Page404'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Action Dispatchers
import { deletePost, addVote, removeVote } from '../actions'

class PostDetails extends Component {

	state = {
		isAlertOpen: false
	}

	closeAlert = () => this.setState({
		isAlertOpen: false
	})

	openAlert = () => this.setState({
		isAlertOpen: true
	})

	deletePost = (postId) => {
		// Deletes the post
		this.props.deletePost(postId)
		// Closes the Alert
		this.closeAlert()
		// Navigates back to the homepage
		this.props.history.push("/")
	}

	render(){

		const { post } = this.props
		const { isAlertOpen } = this.state

		return(
			<div className="post-details">
				{typeof post === 'undefined' ? (
					<Page404 />
				) : (
					<Post 
						showComments={true} 
						post={post} 
						openDialog={() => this.openAlert()}
						addVoteHandler={() => this.props.addVote(post.id)}
						removeVoteHandler={() => this.props.removeVote(post.id)}
					/>
				)}

				{isAlertOpen && (
					<Alert
						open={isAlertOpen}
						title="Attention!"
						text="Do you really wish to delete this post?"
						closeAlert={() => this.closeAlert()}
						confirm={() => this.deletePost(post.id)}
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	post: state.posts.find(post => post.id === props.postId),
	posts: state.posts
})

const mapDispatchToProps = dispatch => ({
	deletePost: (postId) => dispatch(deletePost(postId)),
	addVote: postId => dispatch(addVote(postId)),
	removeVote: postId => dispatch(removeVote(postId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (PostDetails))