import {
	SET_CURRENT_PAGE,
	TOGGLE_CATEGORY_DROPDOWN,
} from '../actions'

// Initial UI state
const initialUiState = {
	currentPage: "/",
	isCategoryDropdownOpen: false,
}

export const uiReducer = (state=initialUiState, action) => {
	switch(action.type){
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.url
			}
		case TOGGLE_CATEGORY_DROPDOWN:
			return {
				...state,
				isCategoryDropdownOpen: !state.isCategoryDropdownOpen
			}
		default:
			return state
	}
}