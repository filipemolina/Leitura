// API to connect with the backend server
import * as API from "../utils/leituraAPI"

////////////////////////////////////////////////// Action type consts

// Posts
export const ADDING_POST = "ADDING_POST"
export const POST_ADDED = "POST_ADDED"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const ADD_VOTE = "ADD_VOTE"
export const REMOVE_VOTE = "REMOVE_VOTE"
export const FETCHING_POSTS = "FETCHING_POSTS"
export const POSTS_FETCHED = "POSTS_FETCHED"
export const FETCH_POSTS = "FETCH_POSTS"


// Comments
export const ADDING_COMMENT = "ADDING_COMMENT"
export const COMMENT_ADDED = "COMMENT_ADDED"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const FETCHING_COMMENTS = "FETCHING_COMMENTS"
export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const FETCH_COMMENTS = "FETCH_COMMENTS"

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

const fetchingPosts = () => ({
	type: FETCHING_POSTS
})

const postsFetched = (posts) => ({
	type: POSTS_FETCHED,
	posts
})

const addingPost = () => ({
	type: ADDING_POST
})

const postAdded = (post) => ({
	type: POST_ADDED,
	post
})

export const fetchPosts = () => dispatch => {
	dispatch(fetchingPosts())

	API.getPosts()
		.then(data => dispatch(postsFetched(data)))
}

export const addPost = (post) => dispatch => {
	dispatch(addingPost())

	API.addPost(post.title, post.body, post.author, post.category)
		.then(data => dispatch(postAdded(data)))
}

////////////////////////////// Comments

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