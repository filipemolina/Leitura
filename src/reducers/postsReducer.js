import {
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	ADD_VOTE,
	REMOVE_VOTE,
	FETCHING_POSTS,
	POSTS_FETCHED,
	FETCH_POSTS,
} from '../actions'

const initialPostsState = {
	byId: {},
	allIds: []
}

export const postsReducer = (state=initialPostsState, action) => {
	switch(action.type){
		case POSTS_FETCHED:
			return action.posts.reduce((accum, val) => ({
				byId: {
					...accum['byId'],
					[val.id]: val
				},
				allIds: accum['allIds'].concat([val.id])
			}), initialPostsState)
		default:
			return state
	}
}
