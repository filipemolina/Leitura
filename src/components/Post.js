import React, { Component } from 'react'
import CategoryChip from './CategoryChip'
import CommentSection from './CommentSection'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'

// Material UI imports
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

// Action dispatchers
import { setCurrentPage } from "../actions"

class Post extends Component{

	// This is just internal state that defines if the votes button should increase or decrease the value
	state = {
		userClicked: false,
	}

	handleVoteClick = () => this.setState((prevState) => ({
		userClicked: !prevState.userClicked
	}))

	// Set the current page on the UI store and the Router
	navigate = url => {
		this.props.history.push(url)
		this.props.setCurrentPage(url)
	}

	componentDidMount = () => console.log("POST", this.props.post)

	render (){

		const { showComments, post } = this.props

		const icon = this.state.userClicked 
									? <ActionThumbUp color={this.props.muiTheme.palette.primary1Color} /> 
									: <ActionThumbUp />

		const voteLabel = this.state.userClicked ? `Unvote (${post.voteScore})` : `Vote (${post.voteScore})`

		return (
			<Card className="post">
				<CardHeader 
					title={post.title} 
					subtitle={`Posted ${dateFormat(post.timestamp, "mmmm dS yyyy h:MMTT")} by ${post.author}`}
					avatar="https://picsum.photos/200" 
				/>
				<CardText>
		    	<CategoryChip text={post.category} />
		    </CardText>
				<CardText>{post.body}</CardText>
		    <CardActions>
		    	<div>
			      <FlatButton 
			      	label={voteLabel}
			      	labelPosition="after"
			      	icon={icon}
			      	onClick={() => this.handleVoteClick()}
			      	primary={this.state.userClicked}
			      />
			    	{/* Show this button only if it is on the home page */}
			    	{showComments || (
			    		<FlatButton 
				      	label="Join the Discussion"
				      	labelPosition="after"
				      	icon={<CommunicationComment />}
				      	onClick={() => this.navigate(`/post/${post.id}`)}
				      />
			    	)}
			    </div>
		    </CardActions>

			  {/* Only show the comment section if explicitly instructed */}
		    {showComments && (
		    	<CommentSection isOpen={true} postId={post.id}/>
		    )}
			</Card>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentPage: (url) => dispatch(setCurrentPage(url))
})

export default withRouter(muiThemeable() (connect(null, mapDispatchToProps) (Post)))