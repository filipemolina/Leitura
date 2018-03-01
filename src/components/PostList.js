import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

class PostList extends Component{
	render() {

		const { posts, showComments } = this.props

		return (
			<div className="post-list">
				{posts.map((post) => (
					<Post showComments={showComments} key={post.id} post={post}/>
				))}
			</div>
		)
	}
}

export default PostList