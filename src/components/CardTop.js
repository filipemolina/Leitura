import React, { Component } from 'react'
import ActionMenu from './ActionMenu'

// Material UI imports
import { CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import NavigationCheck from 'material-ui/svg-icons/navigation/check'

class CardTop extends Component {

	state = {
		newText: ""
	}

	changeValue = (event) => this.setState({
		newText: event.target.value
	})

	sendNewText = (text) => {
		
		this.props.handleStopEditing(text)

		this.setState({
			newText: ""
		})
	}

	render(){

		const { title, text, timestamp, voteScore, handleDelete, handleEdit, isEditing } = this.props

		return(
			<CardText className="card-top">
				<Avatar src="https://picsum.photos/150" />
				<div className="card-top-content">
					<div className="title">{title}</div>
					{isEditing ? (
						<div>
							<TextField name="comment-text" defaultValue={text} style={{width: '80%'}} onChange={this.changeValue}/>
							<FlatButton 
								label="" 
								primary={true} 
								icon={<NavigationCheck />} 
								onClick={() => this.sendNewText(this.state.newText)}/>
						</div>
					):(
						<div className="text">{text}</div>
					)}
				</div>
				<ActionMenu handleDelete={handleDelete} handleEdit={handleEdit}/>
			</CardText>
		)
	}
}

export default CardTop