import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

class PostList extends Component{
	render() {
		return (
			<div className="post-list">
				<Post showComments={false} key="1" votes={34}/>
				<Post showComments={false} key="2" votes={15}/>
				<Post showComments={false} key="3" votes={12}/>
				<Post showComments={false} key="4" votes={65}/>
			</div>
		)
	}
}

export default PostList