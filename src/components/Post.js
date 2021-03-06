import React, { Component } from 'react'
import CategoryChip from './CategoryChip'
import CommentSection from './CommentSection'
import Votes from './Votes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import CardTop from './CardTop'
import PostModal from './PostModal'

// Material UI imports
import { Card, CardActions, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'

// High-order Component from Material UI to get access to the theme variables
import muiThemeable from 'material-ui/styles/muiThemeable'

// Action dispatchers
import { setCurrentPage, fetchCategories, editPost } from "../actions"

import { capitalize } from '../utils/helpers'

class Post extends Component{

	state = {
		editModalOpen: false
	}

	closeModal = () => this.setState({
		editModalOpen: false
	})

	openModal = () => this.setState({
		editModalOpen: true
	})

	// Set the current page on the UI store and the Router
	navigate = url => {
		this.props.history.push(url)
		this.props.setCurrentPage(url)
	}

	handleEdit = post => {
		this.props.edit(this.props.post.id, post)
	}

	componentDidMount = () => {

		// Fetch all the categories in the API for the case when this component is shown by itself in the Post Details page
		this.props.fetchCategories()
	}

	render (){

		const { showComments, post, openDialog, addVoteHandler, removeVoteHandler } = this.props
		const { editModalOpen } = this.state

		return (
			<div>
				<Card className="post">
					<CardTop
						title={post.title}
						text={`Posted ${dateFormat(post.timestamp, "mmmm dS yyyy h:MMTT")} by ${post.author}`}
						handleDelete={() => openDialog(post)}
						handleEdit={() => this.openModal()}
					/>
					<div className="category-chip">
				    	<CategoryChip text={capitalize(post.category)} />
				    </div>
						<CardText>{post.body}</CardText>
				    <CardActions>
				    	<div className="post-actions">
					      <Votes score={post.voteScore} addVote={addVoteHandler} removeVote={removeVoteHandler}/>
					    	{/* Show this button only if it is on the home page */}
					    	{showComments ? (
					    		<div>
					    			{post.commentCount} comments
					    		</div>
					    	) : (
					    		<FlatButton 
						      	label={`Join the discussion (${post.commentCount} comments)`}
						      	labelPosition="after"
						      	icon={<CommunicationComment />}
						      	onClick={() => this.navigate(`/${post.category}/${post.id}`)}
						      />
					    	)}
					    </div>
				    </CardActions>

					  {/* Only show the comment section if explicitly instructed */}
				    {showComments && (
				    	<CommentSection isOpen={true} postId={post.id}/>
				    )}
				</Card>

				{/* Modal for Editing the Post information */}
				{editModalOpen && (
					<PostModal 
						isModalOpen={this.state.editModalOpen}
						categories={this.props.categories}
						post={post}
						handleCancel={() => this.closeModal()}
						handleConfirm={post => this.handleEdit(post)}
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	categories: state.categories
})

const mapDispatchToProps = dispatch => ({
	setCurrentPage: (url) => dispatch(setCurrentPage(url)),
	fetchCategories: () => dispatch(fetchCategories()),
	edit: (id, post) => dispatch(editPost(id, post)),
})

export default withRouter(muiThemeable() (connect(mapStateToProps, mapDispatchToProps) (Post)))