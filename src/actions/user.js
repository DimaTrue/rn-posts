import { GET_USERDATA, REMOVE_USERDATA } from '../action-types/user';

export const getUserData = () => ({
    type: GET_USERDATA,
});

export const removeUserData = () => ({
    type: REMOVE_USERDATA,
});
