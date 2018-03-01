import React, { Component } from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

import { objToArray } from '../utils/helpers'

class CategoryPage extends Component {
	render(){

		// Show only the posts in the current category
		const { posts, category } = this.props

		const catPosts = objToArray(posts)

		return(
			<div className="home-page">
				<PostList showComments={false} posts={posts}/>
				<AddPostButton handleOpen={() => this.props.handleOpenModal()}/>
			</div>
		)
	}
}

export default CategoryPage