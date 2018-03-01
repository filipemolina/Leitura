import * as API from "../utils/leituraAPI"

////////////////////////////////////////////////// Action type consts

// Posts
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const ADD_VOTE = "ADD_VOTE"
export const REMOVE_VOTE = "REMOVE_VOTE"

// Comments
export const ADD_COMMENT = "ADD_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

// UI
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const TOGGLE_CATEGORY_DROPDOWN = "TOGGLE_CATEGORY_DROPDOWN"

// Categories
export const FETCHING_CATEGORIES = "FETCHING_CATEGORIES"
export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED"
export const FETCH_CATEGORIES = "FETCH_CATEGORIES"

/////////////////////////////////////////////////// Action Dispatchers

export const setCurrentPage = (url) => ({
	type: SET_CURRENT_PAGE,
	url
})

export const toggleCategoryDropdown = () => ({
	type: TOGGLE_CATEGORY_DROPDOWN
})

// Categories Dispatchers

export const fetchingCategories = () => ({
	type: FETCHING_CATEGORIES
})

export const categoriesFetched = (categories) => ({
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