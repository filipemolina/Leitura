import React from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

const CategoryPage  = props => {

	// Show only the posts in the current category
	const { posts, category } = props

	const catPosts = posts.filter(post => post.category === category)

	return(
		<div className="home-page">
			<PostList showComments={false} posts={catPosts}/>
			<AddPostButton handleOpen={() => props.handleOpenModal()}/>
		</div>
	)
}

export default CategoryPage