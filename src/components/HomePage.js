import React, { Component } from 'react'
import PostList from './PostList'
import AppBar from 'material-ui/AppBar'
import AddPostButton from './AddPostButton'
import SideMenu from './SideMenu'
import AddPostModal from './AddPostModal'

class HomePage extends Component{

	state = {
		isModalOpen: false
	}

	// Opens the modal for adding a new post
	handleOpenModal = () => this.setState({
		isModalOpen: true
	})

	// Closes the modal for adding a new post
	handleCloseModal = () => this.setState({
		isModalOpen: false
	})

	render(){
		return (
			<div className="app">
				<AppBar title="Leitura" style={{ position: 'fixed' }} onLeftIconButtonClick={this.props.handleOpenMenu}/>
				<SideMenu isMenuOpen={this.props.isMenuOpen}/>
				<PostList />
				<AddPostButton handleOpen={() => this.handleOpenModal()}/>
				<AddPostModal isModalOpen={this.state.isModalOpen} handleClose={() => this.handleCloseModal()}/>
			</div>
		)
	}
}

export default HomePage