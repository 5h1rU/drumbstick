import {
  GET_USER_ID,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
} from './constants';

export const getUserId = id => ({
  type: GET_USER_ID,
  id
});

export const createUserRequest = email => ({
  type: CREATE_USER_REQUEST,
  email
});

export const createUserSuccess = action => ({
  type: CREATE_USER_SUCCESS,
  action
});

export const createUserFailure = error => ({
  type: CREATE_USER_ERROR,
  error
});
