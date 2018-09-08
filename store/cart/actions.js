import {
  ADD_TICKET_TO_CART,
  REMOVE_TICKET_FROM_CART,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  CREATE_CART_REQUEST,
  CREATE_CART_SUCCESS,
  CREATE_CART_FAILURE,
  GET_TOTAL
} from './constants';

export const addTicket = (ticket, quantity) => ({
  type: ADD_TICKET_TO_CART,
  ticket,
  quantity
});

export const removeTicket = ticketId => ({
  type: REMOVE_TICKET_FROM_CART,
  ticketId
});

export const getTotal = total => ({
  type: GET_TOTAL,
  total
});

export const fetchCartRequest = action => ({
  type: FETCH_CART_REQUEST,
  action
});

export const fetchCartSuccess = cart => ({
  type: FETCH_CART_SUCCESS,
  cart
});

export const fetchCartFailure = error => ({
  type: FETCH_CART_FAILURE,
  error
});

export const createCartRequest = action => ({
  type: CREATE_CART_REQUEST,
  action
});

export const createCartSuccess = cart => ({
  type: CREATE_CART_SUCCESS,
  cart
});

export const createCartFailure = error => ({
  type: CREATE_CART_FAILURE,
  error
});
