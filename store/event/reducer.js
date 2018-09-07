import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILURE
} from './constants';
import { combineReducers } from 'redux';

const event = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return { ...action.action.entities.events };
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return true;
    case FETCH_EVENT_SUCCESS:
    case FETCH_EVENT_FAILURE:
      return false;
    default:
      return state;
  }
};

export const getEvent = state => Object.values(state)[0] || {};
export const getFetchingStatus = state => state.isFetching;

export default combineReducers({
  isFetching,
  event
});
