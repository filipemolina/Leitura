import {
	SET_CURRENT_PAGE,
	TOGGLE_CATEGORY_DROPDOWN,
	SET_ORDERING
} from '../actions'

// Initial UI state
const initialUiState = {
	currentPage: "/",
	isCategoryDropdownOpen: false,
	sortedBy: {
    field: 'voteScore',
    order: 'desc'
  }
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
		case SET_ORDERING:
			return {
				...state,
				sortedBy: {
					field: action.field,
					order: action.order,
				}
			}
		default:
			return state
	}
}