import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import { getEventById } from '../../resources/events';

function* fetchEventById({ id }) {
  try {
    const event = yield call(getEventById, id);
    yield put(actions.fetchEventSuccess(event));
  } catch (error) {
    yield put(actions.fetchEventFailure(error.message));
  }
}

export default function* watchFetchEventById() {
  yield takeEvery(types.FETCH_EVENT_REQUEST, fetchEventById);
}

// export default function*() {
//   yield fork(watchFetchEventById);
// }
