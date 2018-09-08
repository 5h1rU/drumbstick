import { combineReducers } from 'redux';

import events from './events/reducer';
import event from './event/reducer';
import venues from './venues/reducer';
import cart from './cart/reducer';
import tickets from './tickets/reducer';

const rootReducer = combineReducers({ events, event, venues, cart, tickets });

export default rootReducer;
