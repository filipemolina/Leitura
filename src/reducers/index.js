import { combineReducers } from 'redux'

import {
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	ADD_VOTE,
	REMOVE_VOTE,
	ADD_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
} from '../actions'

// Posts reducer

const posts = (state={}, action) => {
	switch(action.type){
		default:
			return state
	}
}

const comments = (state={}, action) => {
	switch(action.type){
		default:
			return state
	}
}

export default combineReducers({
	posts,
	comments
})