import {
	ADDING_COMMENT,
	COMMENT_ADDED,
	COMMENT_EDITED,
	COMMENT_DELETED,
	FETCHING_COMMENTS,
	COMMENTS_FETCHED,
	FETCH_COMMENTS,
	COMMENT_VOTE_ADDED,
	COMMENT_VOTE_REMOVED,
} from '../actions'

const initialCommentsState = []

export const commentsReducer = (state=initialCommentsState, action) => {
	switch(action.type){

		case COMMENT_EDITED:
			return state.map(comment => {
				if(comment.id === action.comment.id)
					comment.body = action.comment.body
				return comment
			})

		case COMMENT_VOTE_ADDED:
			return state.map(comment => {
				if(comment.id === action.comment.id)
					comment.voteScore++
				return comment
			})

		case COMMENT_VOTE_REMOVED:
			return state.map(comment => {
				if(comment.id === action.comment.id)
					comment.voteScore--
				return comment
			})
		
		case COMMENT_ADDED:
			const { comment } = action
			return state.concat(action.comment)
		
		case COMMENTS_FETCHED:
			return action.comments
		
		case COMMENT_DELETED:
			return state.filter(comment => comment.id !== action.comment.id)
		
		default:
			return state
	}
}