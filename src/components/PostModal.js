import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import AlertWarning from 'material-ui/svg-icons/alert/warning'

import { capitalize } from "../utils/helpers"

class PostModal extends Component {

	state = {
		name: '',
		title: '',
		category: "",
		body: '',
		showError: false
	}

	nameInput = ""

	// Handles the change of the "Name" text field
	handleChangeName = (event) => this.setState({
		name : event.target.value
	})

	// Handles the change of the "Title" text field
	handleChangeTitle = (event) => this.setState({
		title: event.target.value
	})

	// Handles the change on the "Body" text field
	handleChangeBody = (event) => this.setState({
		body: event.target.value
	})

	// Handles the change of the "Categorias" select field
	handleSelectChange = (event, index, value) => this.setState({
		category: value
	})

	// Clean the input fields and close the modal
	closeModal = () => {
		// Clean the fields
		this.setState({
			name: "",
			title: "",
			category: "",
			body: "",
		})

		// Invoke the function to close the modal
		this.props.handleCancel();
	}

	sendPost = () => {

		const { name, title, category, body } = this.state

		// Remove the error
		this.setState({
			showError: false,
		})

		if(name.trim() && title.trim() && category.trim() && body.trim()){
			
			this.props.handleConfirm({
				title: title,
				body: body,
				author: name,
				category: category,
			})

			this.closeModal()
		} else {
			// Show the error message
			this.setState({
				showError: true,
			})
		}
	}

	componentDidMount = () => {
		
		const { post } = this.props

		if(post){
			this.setState({
				title: post.title,
				body: post.body,
				name: post.author,
				category: post.category
			})
			console.log("Foi fornecido um post", post)
		}
	}

	render(){

		const { categories, post } = this.props
		let title = ""

		// If a post object is provided, then this is an "update post modal"
		// Otherwise it is an "add post modal"
		if(post)
			title = "Edit Post"
		else
			title = "Add a new Post"

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.closeModal}
			/>,
			<FlatButton
				label="Ok"
				primary={true}
				onClick={() => this.sendPost()}
			/>
		]

		return(
			<Dialog
				title={title}
				actions={actions}
				modal={true}
				open={this.props.isModalOpen}
			>

				{this.state.showError && (
					<div className="alert">
						<AlertWarning color="#fff" /> <span>Please, fill in all fields of the form.</span>
					</div>
				)}

				{/* Show the name field only if it is an "Add Post" modal */}

				{!post && (
					<TextField 
						floatingLabelText="Name" 
						value={this.state.name} 
						fullWidth={true} 
						onChange={this.handleChangeName}
						autoFocus
					/>
				)}

				<TextField floatingLabelText="Title" value={this.state.title} fullWidth={true} onChange={this.handleChangeTitle}/>

				{/* Show the category select field only if it is an "Add Post" modal */}

				{!post && (
					<SelectField
						floatingLabelText="Category"
						value={this.state.category}
						onChange={this.handleSelectChange}
					>
						
						{categories.map((category) => (
							<MenuItem key={category.name} value={category.name} primaryText={capitalize(category.name)} />
						))}

					</SelectField>
				)}

				<br />

				<TextField
		      floatingLabelText="Body"
		      multiLine={true}
		      rows={2}
		      rowsMax={4}
		      fullWidth={true}
		      value={this.state.body}
		      onChange={this.handleChangeBody}
		    />
			</Dialog>
		)
	}
}

export default PostModal