import { fork } from 'redux-saga/effects';

import events from './events/sagas';
import event from './event/sagas';
import { watchGetCartByUser, watchCreateCart } from './cart/sagas';
import { watchCreateUser } from './user/sagas';

export default function* root() {
  yield fork(events);
  yield fork(event);
  yield fork(watchGetCartByUser);
  yield fork(watchCreateCart);
  yield fork(watchCreateUser);
}
