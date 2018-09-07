import { combineReducers } from 'redux';
import { ADD_TICKET, REMOVE_TICKET } from './constants';

const initialState = {
  tickets: {}
};

const tickets = (state = {}, action) => {
  switch (action.type) {
    case ADD_TICKET:
      return { ...state, [action.ticket._id]: action.ticket };
    case REMOVE_TICKET:
      const newState = { ...state };
      delete newState[action.ticketId];
      return newState;
    default:
      return state;
  }
};

export const getTotal = (order, tickets) => {
  const ticketsIds = Object.keys(order.tickets);
  return ticketsIds
    .map(id => order.tickets[id])
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
};
export const getOrder = order => order;

export default combineReducers({ tickets });
