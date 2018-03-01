import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'
import { connect } from 'react-redux'

class PostList extends Component{
	render() {
		return (
			<div className="post-list">
				<Post showComments={this.props.showComments} key="1" votes={34}/>
				<Post showComments={this.props.showComments} key="2" votes={15}/>
				<Post showComments={this.props.showComments} key="3" votes={12}/>
				<Post showComments={this.props.showComments} key="4" votes={65}/>
			</div>
		)
	}
}

export default PostList