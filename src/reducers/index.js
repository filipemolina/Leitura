import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'
import { uiReducer } from './uiReducer'
import { categoriesReducer } from './categoriesReducer'

export default combineReducers({
	posts : postsReducer,
	commencts : commentsReducer,
	categories: categoriesReducer,
	ui : uiReducer
})