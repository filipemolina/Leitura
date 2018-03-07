// API to connect with the backend server
import * as API from "../utils/leituraAPI"

////////////////////////////////////////////////// Action type consts

// Posts
export const ADDING_POST = "ADDING_POST"
export const POST_ADDED = "POST_ADDED"
export const EDITING_POST = "EDITING_POST"
export const POST_EDITED = "POST_EDITED"
export const DELETING_POST = "DELETING_POST"
export const POST_DELETED = "POST_DELETED"
export const ADDING_VOTE = "ADDING_VOTE"
export const VOTE_ADDED = "VOTE_ADDED"
export const REMOVING_VOTE = "REMOVING_VOTE"
export const VOTE_REMOVED = "VOTE_REMOVED"
export const FETCHING_POSTS = "FETCHING_POSTS"
export const POSTS_FETCHED = "POSTS_FETCHED"
export const FETCH_POSTS = "FETCH_POSTS"


// Comments
export const ADDING_COMMENT = "ADDING_COMMENT"
export const COMMENT_ADDED = "COMMENT_ADDED"
export const EDITING_COMMENT = "EDITING_COMMENT"
export const COMMENT_EDITED = "COMMENT_EDITED"
export const DELETING_COMMENT = "DELETING_COMMENT"
export const COMMENT_DELETED = "COMMENT_DELETED"
export const FETCHING_COMMENTS = "FETCHING_COMMENTS"
export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const ADDING_COMMENT_VOTE = "ADDING_COMMENT_VOTE"
export const COMMENT_VOTE_ADDED = "COMMENT_VOTE_ADDED"
export const REMOVING_COMMENT_VOTE = "REMOVING_COMMENT_VOTE"
export const COMMENT_VOTE_REMOVED = "COMMENT_VOTE_REMOVED"


// UI
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const TOGGLE_CATEGORY_DROPDOWN = "TOGGLE_CATEGORY_DROPDOWN"
export const SET_ORDERING = "SET_ORDERING"

// Categories
export const FETCHING_CATEGORIES = "FETCHING_CATEGORIES"
export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED"
export const FETCH_CATEGORIES = "FETCH_CATEGORIES"

/////////////////////////////////////////////////// Action Dispatchers ///////////////////////////////////////////////////

/////////////////////////// UI

export const setCurrentPage = (url) => ({
	type: SET_CURRENT_PAGE,
	url
})

export const toggleCategoryDropdown = () => ({
	type: TOGGLE_CATEGORY_DROPDOWN
})

export const setOrdering = (field, order) => ({
	type: SET_ORDERING,
	field,
	order
})

//////////////////////////// Categories

const fetchingCategories = () => ({
	type: FETCHING_CATEGORIES
})

const categoriesFetched = (categories) => ({
	type: CATEGORIES_FETCHED,
	categories
})

// Action dispatcher that dispatches a function that will be intercepted by the thunk middleware
export const fetchCategories = () => dispatch => {
	
	// Dispatches the initial action
	dispatch(fetchingCategories())

	// Make the call to the API
	API.getCategories()
		// Dispatch the categoriesFetched action with the categorires received from the API
		.then((data => dispatch(categoriesFetched(data.categories))))

}

////////////////////////////// Posts

// Fetch

const fetchingPosts = () => ({
	type: FETCHING_POSTS
})

const postsFetched = (posts) => ({
	type: POSTS_FETCHED,
	posts
})

export const fetchPosts = () => dispatch => {
	dispatch(fetchingPosts())

	API.getPosts()
		.then(data => dispatch(postsFetched(data)))
}

// Add

const addingPost = () => ({
	type: ADDING_POST
})

const postAdded = (post) => ({
	type: POST_ADDED,
	post
})

export const addPost = (post) => dispatch => {
	dispatch(addingPost())

	API.addPost(post.title, post.body, post.author, post.category)
		.then(data => dispatch(postAdded(data)))
}

// Delete

const deletingPost = () => ({
	type: DELETING_POST
})

const postDeleted = (postId) => ({
	type: POST_DELETED,
	postId
})

export const deletePost = (postId) => dispatch => {
	dispatch(deletingPost())

	API.deletePost(postId)
		.then(data => dispatch(postDeleted(data.id)))
}

// Edit

const editingPost = () => ({
	type: EDITING_POST
})

const postEdited = (post) => ({
	type: POST_EDITED,
	post
})

export const editPost = (postId, post) => dispatch => {
	dispatch(editingPost())

	API.editPost(postId, post.title, post.body)
		.then(data => dispatch(postEdited(data)))
}

// Votes

const addingVote = () => ({
	type: ADDING_VOTE
})

const voteAdded = post => ({
	type: VOTE_ADDED,
	post
})

const removingVote = () => ({
	type: REMOVING_VOTE
})

const voteRemoved = post => ({
	type: VOTE_REMOVED,
	post
})

export const addVote = postId => dispatch => {
	dispatch(addingVote())

	API.addVote(postId)
		.then(data => dispatch(voteAdded(data)))
}

export const removeVote = postId => dispatch => {
	dispatch(removingVote())

	API.removeVote(postId)
		.then(data => dispatch(voteRemoved(data)))
}

////////////////////////////// Comments

// Fetch

const fetchingComments = () => ({
	type: FETCHING_COMMENTS
})

const commentsFetched = (comments, postId) => ({
	type: COMMENTS_FETCHED,
	comments,
	postId
})

export const fetchPostComments = (postId) => dispatch => {
	dispatch(fetchingComments())

	API.getPostComments(postId)
		.then(data => {
			dispatch(commentsFetched(data, postId))
		})
}

// Add

const addingComment = () => ({
	type: ADDING_COMMENT
})

const commentAdded = (comment) => ({
	type: COMMENT_ADDED,
	comment
})

export const addComment = (postId, body, author) => dispatch => {
	dispatch(addingComment())

	API.addComment(postId, body, author)
	.then(data => {
		dispatch(commentAdded(data))
	})
}

// Delete

const deletingComment = () => ({
	type: DELETING_COMMENT
})

const commentDeleted = comment => ({
	type: COMMENT_DELETED,
	comment
})

export const deleteComment = commentId => dispatch => {
	dispatch(deletingComment())

	API.deleteComment(commentId)
		.then(data => dispatch(commentDeleted(data)))
}

// Edit

const editingComment = () => ({
	type: EDITING_COMMENT
})

const commentEdited = comment => ({
	type: COMMENT_EDITED,
	comment
})

export const editComment = (commentId, body) => dispatch => {
	dispatch(editingComment())

	API.editComment(commentId, body)
		.then(data => dispatch(commentEdited(data)))
}

// Votes

const addingCommentVote = () => ({
	type: ADDING_COMMENT_VOTE
})

const commentVoteAdded = comment => ({
	type: COMMENT_VOTE_ADDED,
	comment
})

const removingCommentVote = () => ({
	type: REMOVING_COMMENT_VOTE
})

const commentVoteRemoved = comment => ({
	type: COMMENT_VOTE_REMOVED,
	comment
})

export const addCommentVote = commentId => dispatch => {
	dispatch(addingCommentVote())

	API.addVoteToComment(commentId)
		.then(data => dispatch(commentVoteAdded(data)))
}

export const removeCommentVote = commentId => dispatch => {
	dispatch(removingCommentVote())

	API.removeVoteFromComment(commentId)
		.then(data => dispatch(commentVoteRemoved(data)))
}