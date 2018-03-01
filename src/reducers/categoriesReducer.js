import {
	FETCHING_CATEGORIES,
	CATEGORIES_FETCHED,
	FETCH_CATEGORIES,
} from '../actions'

const initialCategoriesState = {
	byId: {},
	allIds: []
}

export const categoriesReducer = (state=initialCategoriesState, action) => {
	switch(action.type){
		case CATEGORIES_FETCHED:
			return action.categories.reduce((accum, val) => {
				return { 
					byId: {
						...accum['byId'],
						[val.name]: val
					},
					allIds: accum['allIds'].concat([val.name])
				}
			}, initialCategoriesState)
		default:
			return state
	}
}