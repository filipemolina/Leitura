import React, { Component } from 'react'
import CategoryChip from './CategoryChip'
import CommentSection from './CommentSection'
import Votes from './Votes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'

// Material UI imports
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

// Action dispatchers
import { setCurrentPage } from "../actions"

import { capitalize } from '../utils/helpers'

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

	render (){

		/*<FlatButton 
    	label={voteLabel}
    	labelPosition="after"
    	icon={icon}
    	onClick={() => this.handleVoteClick()}
    	primary={this.state.userClicked}
    />*/

		const { showComments, post, muiTheme, openDialog, addVoteHandler, removeVoteHandler } = this.props

		const icon = this.state.userClicked 
									? <ActionThumbUp color={muiTheme.palette.primary1Color} /> 
									: <ActionThumbUp />

		const voteLabel = this.state.userClicked ? `Unvote (${post.voteScore})` : `Vote (${post.voteScore})`

		return (
			<Card className="post">
				<CardHeader 
					title={post.title} 
					subtitle={`Posted ${dateFormat(post.timestamp, "mmmm dS yyyy h:MMTT")} by ${post.author}`}
					avatar="https://picsum.photos/200" 
					showExpandableButton={true}
					openIcon={<NavigationClose onClick={() => openDialog(post)}/>}
					closeIcon={<NavigationClose onClick={() => openDialog(post)}/>}
				/>
				<div className="category-chip">
		    	<CategoryChip text={capitalize(post.category)} />
		    </div>
				<CardText>{post.body}</CardText>
		    <CardActions>
		    	<div className="post-actions">
			      <Votes score={post.voteScore} addVote={addVoteHandler} removeVote={removeVoteHandler}/>
			    	{/* Show this button only if it is on the home page */}
			    	{showComments || (
			    		<FlatButton 
				      	label={`Join the discussion (${post.commentCount} comments)`}
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