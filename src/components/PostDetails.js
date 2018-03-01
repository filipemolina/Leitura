import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostDetails extends Component {

	render(){

		const { postId } = this.props

		const posts = this.props.posts.filter(post => post.id === postId)

		return(
			<div className="post-details">
				{posts.length && (
					<Post showComments={true} votes={22} post={posts[0]}/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	posts: state.posts
})

export default connect(mapStateToProps) (PostDetails)