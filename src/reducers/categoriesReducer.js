import {
	FETCHING_CATEGORIES,
	CATEGORIES_FETCHED,
	FETCH_CATEGORIES,
} from '../actions'

export const categoriesReducer = (state={}, action) => {
	switch(action.type){
		case CATEGORIES_FETCHED:
			return action.categories.reduce((accum, val) => {
				return { ...accum, [val.name]: val }
			}, {})
		default:
			return state
	}
}