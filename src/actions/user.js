import { GET_TOKEN, REMOVE_TOKEN } from '../action-types/user';

export const getToken = () => ({
    type: GET_TOKEN,
});

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});
