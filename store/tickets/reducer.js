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

export const getTicketsByEventId = (state, event) => {
  const ids = Object.keys(state);
  return ids
    .filter(id => state[id].event === getEvent(event)._id)
    .map(ticketId => state[ticketId]);
};

export const getTickets = state =>
  state.result.map(ticket => state.tickets[ticket]);

export default tickets;
