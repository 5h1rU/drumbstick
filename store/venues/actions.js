import {
  FETCH_VENUES_REQUEST,
  FETCH_VENUES_SUCCESS,
  FETCH_VENUES_FAILURE,
  FETCH_VENUE_REQUEST,
  FETCH_VENUE_SUCCESS,
  FETCH_VENUE_FAILURE
} from './constants';

export const fetchVenuesRequest = action => ({
  type: FETCH_VENUES_REQUEST,
  action
});

export const fetchVenuesSuccess = action => ({
  type: FETCH_VENUES_SUCCESS,
  action
});

export const fetchVenuesFailure = error => ({
  type: FETCH_VENUES_FAILURE,
  error
});

export const fetchEventRequest = id => ({
  type: FETCH_VENUE_REQUEST,
  id
});

export const fetchEventSuccess = action => ({
  type: FETCH_VENUE_SUCCESS,
  action
});

export const fetchEventFailure = error => ({
  type: FETCH_VENUE_FAILURE,
  error
});
