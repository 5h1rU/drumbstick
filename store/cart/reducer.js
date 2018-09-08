import { combineReducers } from 'redux';
import {
  ADD_TICKET_TO_CART,
  REMOVE_TICKET_FROM_CART,
  CREATE_CART_SUCCESS,
  FETCH_CART_SUCCESS
} from './constants';

// const initialState = {
//   [cartId]: '1234',
//   tickets: { [ticketId]: quantity: 0 },
//   user: '123456'

// }

const mongoObjectId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const id =
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, () => {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase();

  return '5b92ecb2f9a683171cf17084';
};

const tickets = (state = {}, action) => {
  switch (action.type) {
    case ADD_TICKET_TO_CART:
      return {
        ...state,
        [action.ticket]: {
          quantity: action.quantity
        }
      };
    case REMOVE_TICKET_FROM_CART:
      const newState = { ...state };
      delete newState[action.ticketId];
      return newState;
    case CREATE_CART_SUCCESS:
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        ...(action.cart.entities.cart[action.cart.result].products.map(
          product => {
            return {
              [product._id]: { quantity: product.quantity }
            };
          }
        )[0] || {})
      };

    default:
      return state;
  }
};

// const total = (state = 0, action) => {
//   switch (action.type) {
//     case GET_TOTAL:
//       return { ...state, ...action.total };
//     default:
//       return state;
//   }
// };

const id = (state = null, action) => {
  switch (action.type) {
    case CREATE_CART_SUCCESS:
    case FETCH_CART_SUCCESS:
      return action.cart.result;
    default:
      return state;
  }
};

export const getTotalPrice = (cart, tickets) => {
  const ticketsIds = Object.keys(cart.tickets);
  return ticketsIds
    .map(id => tickets[id])
    .reduce(
      (acc, curr) => acc + curr.price * cart.tickets[curr._id].quantity,
      0
    );
};
export const getCart = cart => cart;
export const getQuantityByTicket = ticket => ticket.quantity;

export default combineReducers({ tickets, id });
