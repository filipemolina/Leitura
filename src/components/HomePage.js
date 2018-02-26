import React, { Component } from 'react'
import PostList from './PostList'
import AppBar from 'material-ui/AppBar'
import AddPostButton from './AddPostButton'

class HomePage extends Component{
	render(){
		return (
			<div className="app">
				<AppBar title="Leitura" />
				<PostList />
				<AddPostButton />
			</div>
		)
	}
}

export default HomePage