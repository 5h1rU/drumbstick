import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE
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
