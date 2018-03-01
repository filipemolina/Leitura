import React, { Component } from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

class CategoryPage extends Component {
	render(){
		return(
			<div className="home-page">
				<PostList showComments={false}/>
				<AddPostButton handleOpen={() => this.props.handleOpenModal()}/>
			</div>
		)
	}
}

export default CategoryPage