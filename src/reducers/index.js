import * as actions from '../actions'

const initialState = {
	players: [],

	authToken: null,
	currentUser: null,
	loading: false,
	error: null,
};

export const tourneytoolReducer = (state=initialState, action) => {

	let expression = action.type
	switch (expression) {

		// case actions.LOGOUT: 
		// 	return Object.assign({}, state, {
		// 		currentUser: null
		// 	});		
		

		default:
		return state;
	}
}