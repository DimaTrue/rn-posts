import * as user from '../action-types/user';

export const initialState = {
	token: '',
	loading: true,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case user.GET_TOKEN:
			return { ...state, };

		case user.GET_TOKEN_SUCCESS:
			return { ...state, token: action.payload };

		case user.GET_TOKEN_FAILURE:
			return { ...state, error: action.payload };

		case user.REMOVE_TOKEN:
			return { ...state, };

		case user.REMOVE_TOKEN_SUCCESS:
			return { ...state, token: null };

		case user.REMOVE_TOKEN_FAILURE:
			return { ...state, error: action.payload };

		case user.SAVE_TOKEN:
			return { ...state, };

		case user.SAVE_TOKEN_SUCCESS:
			return { ...state, token: action.payload };

		case user.SAVE_TOKEN_FAILURE:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

export default reducer;