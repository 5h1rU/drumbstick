import { FETCH_EVENT_SUCCESS } from './constants';

const event = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      return { ...action.action.entities.events };
    default:
      return state;
  }
};

export const getEvent = state => Object.values(state)[0] || {};

export default event;
