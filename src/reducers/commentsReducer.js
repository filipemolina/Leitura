import {
	ADDING_COMMENT,
	COMMENT_ADDED,
	EDIT_COMMENT,
	DELETE_COMMENT,
	FETCHING_COMMENTS,
	COMMENTS_FETCHED,
	FETCH_COMMENTS,
} from '../actions'

const initialCommentsState = []

export const commentsReducer = (state=initialCommentsState, action) => {
	switch(action.type){
		case COMMENT_ADDED:
			const { comment } = action
			return state.concat(action.comment)
		case COMMENTS_FETCHED:
			return action.comments
		default:
			return state
	}
}