export const ADD_COMMENT = "ADD_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const FETCHING_COMMENTS = "FETCHING_COMMENTS"
export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const FETCH_COMMENTS = "FETCH_COMMENTS"

export const commentsReducer = (state={}, action) => {
	switch(action.type){
		case COMMENTS_FETCHED:
			return {
				...state,
				[action.postId] : action.comments
			}
		default:
			return state
	}
}