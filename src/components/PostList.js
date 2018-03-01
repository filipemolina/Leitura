import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

class PostList extends Component{
	render() {

		const { posts, showComments } = this.props

		return (
			<div className="post-list">
				{posts.allIds.map((postId) => (
					<Post showComments={showComments} key={postId} post={posts.byId[postId]}/>
				))}
			</div>
		)
	}
}

export default PostList