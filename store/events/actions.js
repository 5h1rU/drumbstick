import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from './constants';

export const fetchEventsRequest = action => ({
  type: FETCH_EVENTS_REQUEST,
  action
});

export const fetchEventsSuccess = action => ({
  type: FETCH_EVENTS_SUCCESS,
  action
});

export const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  error
});
