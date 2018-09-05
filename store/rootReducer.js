import { combineReducers } from 'redux';

import events from './events/reducer';
import event from './event/reducer';
import venues from './venues/reducer';

const rootReducer = combineReducers({ events, event, venues });

export default rootReducer;
