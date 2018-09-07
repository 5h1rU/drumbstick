import { combineReducers } from 'redux';

import events from './events/reducer';
import event from './event/reducer';
import venues from './venues/reducer';
import order from './order/reducer';
import tickets from './tickets/reducer';

const rootReducer = combineReducers({ events, event, venues, order, tickets });

export default rootReducer;
