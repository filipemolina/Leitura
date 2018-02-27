import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

class PostList extends Component{
	render() {
		return (
			<div className="post-list">
				<Post votes={34}/>
				<Post votes={15}/>
				<Post votes={12}/>
				<Post votes={65}/>
			</div>
		)
	}
}

export default PostList