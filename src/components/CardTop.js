import React, { Component } from 'react'
import ActionMenu from './ActionMenu'

// Material UI imports
import { CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

class CardTop extends Component {
	render(){

		const { title, text, timestamp, voteScore, handleDelete, handleEdit } = this.props

		return(
			<CardText className="card-top">
				<Avatar src="https://picsum.photos/150" />
				<div className="card-top-content">
					<div className="title">{title}</div>
					<div className="text">{text}</div>
				</div>
				<ActionMenu handleDelete={handleDelete} handleEdit={handleEdit}/>
			</CardText>
		)
	}
}

export default CardTop