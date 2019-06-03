import * as user from '../action-types/user';

export const initialState = {
	userData: '',
	loading: true,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case user.GET_USERDATA:
			return { ...state, };

		case user.GET_USERDATA_SUCCESS:
			return { ...state, userData: action.payload };

		case user.GET_USERDATA_FAILURE:
			return { ...state, error: action.payload };

		case user.REMOVE_USERDATA:
			return { ...state, };

		case user.REMOVE_USERDATA_SUCCESS:
			return { ...state, userData: null };

		case user.REMOVE_USERDATA_FAILURE:
			return { ...state, error: action.payload };

		case user.SAVE_USERDATA:
			return { ...state, };

		case user.SAVE_USERDATA_SUCCESS:
			return { ...state, userData: action.payload };

		case user.SAVE_USERDATA_FAILURE:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

export default reducer;