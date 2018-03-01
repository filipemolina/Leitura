import React, { Component } from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

class CategoryPage extends Component {
	render(){

		// Show only the posts in the current category
		const { posts, category } = this.props

		const catPosts = posts.filter(post => post.category === category)

		return(
			<div className="home-page">
				<PostList showComments={false} posts={catPosts}/>
				<AddPostButton handleOpen={() => this.props.handleOpenModal()}/>
			</div>
		)
	}
}

export default CategoryPage