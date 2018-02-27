import React, { Component } from 'react'

// Material UI imports
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'

class AddPostModal extends Component{

	state = {
		name: '',
		categorias: ["Teste", "Mulambo", "Crocodilo", "Aminoácido"],
		categoria: "",
	}

	// Handle the change of the "Name" text field
	handleChangeName = (event) => this.setState({
		name : event.target.value
	})

	// Handle the change of the "Categorias" select field
	handleSelectChange = (event, index, value) => this.setState({
		categoria: value
	})

	// Clean the input fields and close the modal
	closeModal = () => {
		// Clean the fields
		this.setState({
			name: "",
			categoria: ""
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
				<TextField floatingLabelText="Name" value={this.state.name} fullWidth={true} onChange={this.handleChangeName}/>
				<SelectField
					floatingLabelText="Categorias"
					value={this.state.categoria}
					onChange={this.handleSelectChange}
				>
					<MenuItem key="1" value="" primaryText="" />
					
					{this.state.categorias.map((categoria) => (
						<MenuItem key={categoria} value={categoria} primaryText={categoria} />
					))}

				</SelectField>
			</Dialog>
		)
	}
}

export default AddPostModal