import * as profile from '../action-types/profile';

export const initialState = {
	profileData: '',
	loading: false,
	error: null,
	avatar: null,
	loadingAvatar: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case profile.GET_PROFILEDATA:
			return { ...state, loading: true, };

		case profile.GET_PROFILEDATA_SUCCESS:
			return { ...state, profileData: action.payload, loading: false, };

		case profile.GET_PROFILEDATA_FAILURE:
			return { ...state, error: action.payload, loading: false, };

		case profile.REMOVE_PROFILEDATA:
			return { ...state, };

		case profile.REMOVE_PROFILEDATA_SUCCESS:
			return { ...state, profileData: null };

		case profile.REMOVE_PROFILEDATA_FAILURE:
			return { ...state, error: action.payload };

		case profile.SAVE_PROFILEDATA:
			return { ...state, };

		case profile.SAVE_PROFILEDATA_SUCCESS:
			return { ...state, profileData: action.payload };

		case profile.SAVE_PROFILEDATA_FAILURE:
			return { ...state, error: action.payload };

		case profile.GET_AVATAR:
			return { ...state, loadingAvatar: true, };

		case profile.GET_AVATAR_SUCCESS:
			return { ...state, avatar: action.payload, loadingAvatar: false, };

		case profile.GET_AVATAR_FAILURE:
			return { ...state, error: action.payload, loadingAvatar: false, };

		case profile.REMOVE_AVATAR:
			return { ...state, };

		case profile.REMOVE_AVATAR_SUCCESS:
			return { ...state, avatar: null };

		case profile.REMOVE_AVATAR_FAILURE:
			return { ...state, error: action.payload };

		case profile.SAVE_AVATAR:
			return { ...state, };

		case profile.SAVE_AVATAR_SUCCESS:
			return { ...state, avatar: action.payload };

		case profile.SAVE_AVATAR_FAILURE:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

export default reducer;