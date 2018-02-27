import React, { Component } from 'react'

// Material UI imports
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'

class Post extends Component{

	state = {
		userClicked: false
	}

	handleVoteClick = () => this.setState((prevState) => ({
		userClicked: !prevState.userClicked
	}))

	render (){

		const icon = this.state.userClicked ? <ActionThumbDown /> : <ActionThumbUp />
		const voteLabel = this.state.userClicked ? `Unvote (${this.props.votes})` : `Vote (${this.props.votes})`

		return (
			<Card className="post">
				<CardHeader title="Title of the Post" subtitle="Posted in 16 Jan 2018 por Jake" avatar="https://picsum.photos/200" />
				<CardText>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		    </CardText>
		    <CardActions>
		      <FlatButton 
		      	label={voteLabel}
		      	labelPosition="after"
		      	icon={icon}
		      	onClick={() => this.handleVoteClick()}
		      />
		      <FlatButton 
		      	label="Comment"
		      	labelPosition="after"
		      	icon={<CommunicationComment />}
		      />
		    </CardActions>
			</Card>
		)
	}
}

export default Post