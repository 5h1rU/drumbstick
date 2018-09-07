import { ADD_TICKET, REMOVE_TICKET } from './constants';

export const addTicket = ticket => ({
  type: ADD_TICKET,
  ticket
});

export const removeTicket = ticketId => ({
  type: REMOVE_TICKET,
  ticketId
});
