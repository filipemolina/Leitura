import { CATEGORIES_FETCHED } from '../actions'

const initialCategoriesState = []

export const categoriesReducer = (state=initialCategoriesState, action) => {
	switch(action.type){
		case CATEGORIES_FETCHED:
			console.log("CATEGORIES", action.categories)
			return action.categories
		default:
			return state
	}
}