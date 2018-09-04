import { combineReducers } from 'redux';

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENT_SUCCESS
} from './constants';
import { debug } from 'util';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return true;
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const events = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return { ...state, ...action.action.entities.events };
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return action.action.result;
    default:
      return state;
  }
};

const event = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return { ...state, ...action.action };
    default:
      return state;
  }
};

export const getFetchingStatus = state => state.isFetching;
export const getIds = state => state.ids;
export const getEventFromEventList = (event, id) => event[id];
export const getEvent = state => state.event;
export const getEvents = state => {
  const ids = getIds(state);
  return ids.map(id => getEventFromEventList(state.events, id));
};

export default combineReducers({
  isFetching,
  ids,
  events,
  event
});
