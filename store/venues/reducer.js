import { FETCH_EVENTS_SUCCESS } from '../events/constants';
import { FETCH_EVENT_SUCCESS } from '../event/constants';
import { getEvent } from '../event/reducer';

const venues = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENT_SUCCESS:
      return { ...state, ...action.action.entities.venues };
    default:
      return state;
  }
};

export const getVenue = (venue, event) => {
  const currentEvent = getEvent(event);
  return venue[currentEvent.venue] || {};
};

export const getVenues = venues => {
  return venues;
};

export default venues;
