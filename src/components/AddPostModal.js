import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

class AddPostModal extends Component {

	state = {
		name: '',
		title: '',
		categories: ["Teste", "Mulambo", "Crocodilo", "Aminoácido"],
		category: "",
		body: '',
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
		this.props.handleClose();
	}

	render(){

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.closeModal}
			/>,
			<FlatButton
				label="Ok"
				primary={true}
				onClick={this.closeModal}
			/>
		]

		return(
			<Dialog
				title="Add a new Post"
				actions={actions}
				modal={true}
				open={this.props.isModalOpen}
			>

				<TextField 
					floatingLabelText="Name" 
					value={this.state.name} 
					fullWidth={true} 
					onChange={this.handleChangeName}
					autoFocus
				/>

				<TextField floatingLabelText="Title" value={this.state.title} fullWidth={true} onChange={this.handleChangeTitle}/>
				
				<SelectField
					floatingLabelText="Category"
					value={this.state.category}
					onChange={this.handleSelectChange}
				>
					
					{this.state.categories.map((category) => (
						<MenuItem key={category} value={category} primaryText={category} />
					))}

				</SelectField>

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

export default AddPostModal