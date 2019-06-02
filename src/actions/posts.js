import { GET_POSTS, REMOVE_POSTS } from '../action-types/posts';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const removePosts = () => ({
  type: REMOVE_POSTS,
});