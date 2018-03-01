import React, { Component } from 'react'
import Post from './Post'

class PostDetails extends Component {
	render(){

		const { params } = this.props.match

		return(
			<div className="post-details">
				<Post showComments={true} votes={22} />
			</div>
		)
	}
}

export default PostDetails