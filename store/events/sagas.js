import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import { getAllEvents } from '../../resources/events';

function* fetchEvents() {
  try {
    const events = yield call(getAllEvents);
    yield put(actions.fetchEventsSuccess(events));
  } catch (error) {
    yield put(actions.fetchEventsFailure(error.message));
  }
}

export default function* watchGetAllEvents() {
  yield takeEvery(types.FETCH_EVENTS_REQUEST, fetchEvents);
}

// export default function*() {
//   yield fork(watchGetAllEvents);
// }
