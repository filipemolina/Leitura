import React, { Component } from 'react'
import Post from './Post'
import Alert from './Alert'
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

		const { postId } = this.props
		const { isAlertOpen } = this.state

		const posts = this.props.posts.filter(post => post.id === postId)

		return(
			<div className="post-details">
				{posts.length && (
					<Post 
						showComments={true} 
						post={posts[0]} 
						openDialog={() => this.openAlert()}
						addVoteHandler={() => this.props.addVote(posts[0].id)}
						removeVoteHandler={() => this.props.removeVote(posts[0].id)}
					/>

				)}

				{isAlertOpen && (
					<Alert
						open={isAlertOpen}
						title="Attention!"
						text="Do you really wish to delete this post?"
						closeAlert={() => this.closeAlert()}
						confirm={() => this.deletePost(posts[0].id)}
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	posts: state.posts
})

const mapDispatchToProps = dispatch => ({
	deletePost: (postId) => dispatch(deletePost(postId)),
	addVote: postId => dispatch(addVote(postId)),
	removeVote: postId => dispatch(removeVote(postId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (PostDetails))