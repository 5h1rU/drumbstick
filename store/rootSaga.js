import { fork } from 'redux-saga/effects';

import events from './events/sagas';
import event from './event/sagas';

export default function* root() {
  yield fork(events);
  yield fork(event);
}
