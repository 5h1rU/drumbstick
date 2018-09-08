import { CREATE_ORDER, REMOVE_ORDER } from './constants';

export const createOrder = order => ({
  type: CREATE_ORDER,
  order
});

export const removeOrder = orderId => ({
  type: REMOVE_ORDER,
  orderId
});
