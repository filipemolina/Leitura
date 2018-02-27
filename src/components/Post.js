import React, { Component } from 'react'
import CategoryChip from './CategoryChip'
import CommentSection from './CommentSection'

// Material UI imports
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

class Post extends Component{

	state = {
		userClicked: false,
	}

	handleVoteClick = () => this.setState((prevState) => ({
		userClicked: !prevState.userClicked
	}))

	render (){

		const { showComments } = this.props

		const icon = this.state.userClicked 
									? <ActionThumbUp color={this.props.muiTheme.palette.primary1Color} /> 
									: <ActionThumbUp />

		const voteLabel = this.state.userClicked ? `Unvote (${this.props.votes})` : `Vote (${this.props.votes})`

		return (
			<Card className="post">
				<CardHeader 
					title="Title of the Post" 
					subtitle="Posted in 16 Jan 2018 por Jake" 
					avatar="https://picsum.photos/200" 
				/>
				<CardText>
		    	<CategoryChip text="Abacaxi" />
		    </CardText>
				<CardText>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		    </CardText>

		  	{/* Only show the comment section if explicitly instructed */}
		    {showComments && (
		    	<CommentSection isOpen={true} />
		    )}

		    <CardActions>
		      <FlatButton 
		      	label={voteLabel}
		      	labelPosition="after"
		      	icon={icon}
		      	onClick={() => this.handleVoteClick()}
		      	primary={this.state.userClicked}
		      />
		      <FlatButton 
		      	label="Join the Discussion"
		      	labelPosition="after"
		      	icon={<CommunicationComment />}
		      />
		    </CardActions>
			</Card>
		)
	}
}

export default muiThemeable() (Post)