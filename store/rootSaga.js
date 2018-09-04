// import { fork } from 'redux-saga/effects';
import events from './events/sagas';

export default function* root() {
  yield events();
  // yield fork(nextRedditChange)
  // yield fork(invalidateReddit)
}
