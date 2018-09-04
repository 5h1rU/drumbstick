import { takeEvery, put, call, fork } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import { getAllEvents, getEventById } from '../../resources/events';

function* fetchEvents() {
  try {
    const events = yield call(getAllEvents);
    yield put(actions.fetchEventsSuccess(events));
  } catch (error) {
    yield put(actions.fetchEventsFailure(error.message));
  }
}

function* fetchEventById({ id }) {
  try {
    const event = yield call(getEventById, id);
    yield put(actions.fetchEventSuccess(event));
  } catch (error) {
    yield put(actions.fetchEventFailure(error.message));
  }
}

function* watchGetAllEvents() {
  yield takeEvery(types.FETCH_EVENTS_REQUEST, fetchEvents);
}

function* watchFetchEventById() {
  yield takeEvery(types.FETCH_EVENT_REQUEST, fetchEventById);
}

export default function*() {
  yield fork(watchGetAllEvents);
  yield fork(watchFetchEventById);
}
