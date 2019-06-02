import * as posts from '../action-types/posts';

export const initialState = {
	posts: [],
	loading: true,
	error: null,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case posts.GET_POSTS:
			return { ...state, loading: true, };

		case posts.GET_POSTS_SUCCESS:
			return { ...state, posts: action.payload, loading: false, };

		case posts.GET_POSTS_FAILURE:
			return { ...state, error: action.payload, loading: false, };

		// case posts.REMOVE_POSTS:
		// 	return { ...state, };

		// case posts.REMOVE_POSTS_SUCCESS:
		// 	return { ...state, posts: null };

		// case posts.REMOVE_POSTS_FAILURE:
		// 	return { ...state, error: action.payload };

		case posts.ADD_POST:
			return { ...state, };

		case posts.ADD_POST_SUCCESS:
			return { ...state, posts: action.payload };

		case posts.ADD_POST_FAILURE:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

export default reducer;