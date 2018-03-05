import React, { Component } from 'react'
import { connect } from 'react-redux'

// Material UI imports
import { Card, CardHeader, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ContentSend from 'material-ui/svg-icons/content/send'

// Action dispatchers
import { addComment } from '../actions'

class CommentForm extends Component {

	state = {
		author: "",
		text: "",
	}

	handleChangeAuthor = (event) => this.setState({
		author: event.target.value
	})

	handleChangeText = (event) => this.setState({
		text: event.target.value
	})

	sendComment = () => {
		const { postId } = this.props
		const { text, author } = this.state

		// Test if one of the fields are empty
		if(text.trim() && author.trim()){
			this.props.sendComment(postId, text, author)
			this.setState({
				author: "",
				text: "",
			})
		}
	}

	render(){

		return(
			<Card className="comment-form">
				<CardHeader
					title="Write a comment!"
					style={{ paddingTop: '5px', paddingBottom: '5px' }}
				/>
				<CardText style={{ paddingTop: '0', paddingBottom: '0' }}>
					<TextField
					floatingLabelText="Name"
						value={this.state.author}
						onChange={this.handleChangeAuthor}
						fullWidth={true}
					/>
					<TextField
					floatingLabelText="Comment"
						value={this.state.text}
						onChange={this.handleChangeText}
						rows={2}
						rowsMax={4}
						fullWidth={true}
					/>
					<div className="align-right">
						<FlatButton
							label="Send"
							icon={<ContentSend />}
							primary={true}
							onClick={() => this.sendComment()}
						/>
					</div>
				</CardText>
			</Card>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	sendComment: (postId, body, author) => dispatch(addComment(postId, body, author))
})

export default connect(null, mapDispatchToProps) (CommentForm)