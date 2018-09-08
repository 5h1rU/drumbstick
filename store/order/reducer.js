import { combineReducers } from 'redux';
import { CREATE_ORDER, REMOVE_ORDER } from './constants';

const tickets = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, [action.order._id]: action.order };
    case REMOVE_ORDER:
      const newState = { ...state };
      delete newState[action.order];
      return newState;
    default:
      return state;
  }
};

export const getCart = order => order;

export default combineReducers({ tickets });
