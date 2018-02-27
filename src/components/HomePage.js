import React, { Component } from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

class HomePage extends Component{
	render(){
		return (
			<div className="home-page">
				<PostList />
				<AddPostButton handleOpen={() => this.props.handleOpenModal()}/>
			</div>
		)
	}
}

export default HomePage