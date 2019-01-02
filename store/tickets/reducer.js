import { FETCH_EVENTS_SUCCESS } from '../events/constants';
import { FETCH_EVENT_SUCCESS } from '../event/constants';
import { getEvent } from '../event/reducer';

const tickets = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENT_SUCCESS:
      return { ...state, ...action.action.entities.tickets };
    default:
      return state;
  }
};

export const getTicketsByEventId = (tickets, event) => {
  const ids = Object.keys(tickets);
  return ids
    .filter(id => tickets[id].event === getEvent(event)._id)
    .map(ticketId => {
      return tickets[ticketId];
    });
};

export const getTickets = state =>
  state.result.map(ticket => state.tickets[ticket]);

export default tickets;
