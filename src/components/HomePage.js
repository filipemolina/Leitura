import React from 'react'
import PostList from './PostList'
import AddPostButton from './AddPostButton'

const HomePage  = props => {
	return (
		<div className="home-page">
			<PostList posts={props.posts}/>
			<AddPostButton handleOpen={() => props.handleOpenModal()}/>
		</div>
	)
}

export default HomePage