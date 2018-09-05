import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE
} from './constants';

export const fetchEventRequest = id => ({
  type: FETCH_EVENT_REQUEST,
  id
});

export const fetchEventSuccess = action => ({
  type: FETCH_EVENT_SUCCESS,
  action
});

export const fetchEventFailure = error => ({
  type: FETCH_EVENT_FAILURE,
  error
});
