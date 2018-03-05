import {
	POST_ADDED,
	EDIT_POST,
	POST_DELETED,
	ADD_VOTE,
	REMOVE_VOTE,
	FETCHING_POSTS,
	POSTS_FETCHED,
	FETCH_POSTS,
	COMMENT_ADDED,
	COMMENT_DELETED,
} from '../actions'

const initialPostsState = []

export const postsReducer = (state=initialPostsState, action) => {
	switch(action.type){
		
		case COMMENT_ADDED:
			// If a comment was added, increase the number of comments in the post
			return state.map(post => {
				if(post.id === action.comment.parentId)
					post.commentCount++
				return post
			})

		case COMMENT_DELETED:
			// If a comment was removed, decrease the number of comments
			return state.map(post => {
				if(post.id === action.comment.parentId)
						post.commentCount--
				return post
			})
		
		case POST_ADDED:
			return state.concat(action.post)
		
		case POSTS_FETCHED:
			return action.posts
		
		case POST_DELETED:
			return state.filter(post => post.id !== action.postId)
		
		default:
			return state
	}
}
