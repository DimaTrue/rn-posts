import { GET_PROFILEDATA, REMOVE_PROFILEDATA, GET_AVATAR, REMOVE_AVATAR } from '../action-types/profile';

export const getProfileData = () => ({
    type: GET_PROFILEDATA,
});

export const removeProfileData = () => ({
    type: REMOVE_PROFILEDATA,
});

export const getAvatar = () => ({
  type: GET_AVATAR,
});

export const removeAvatar = () => ({
  type: REMOVE_AVATAR,
});