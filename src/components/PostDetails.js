import React, { Component } from 'react'

class PostDetails extends Component {
	render(){

		const { params } = this.props.match

		return(
			<h2>{params.id}</h2>
		)
	}
}

export default PostDetails