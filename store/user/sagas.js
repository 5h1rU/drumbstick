import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import { getEventById, createUser } from '../../resources/events';

function* getUserId({ id }) {
  debugger;
  try {
    // const event = yield call(getEventById, id);
    // yield put(actions.fetchEventSuccess(event));
  } catch (error) {
    // yield put(actions.fetchEventFailure(error.message));
  }
}

function* postUser() {
  try {
    const user = yield call(createUser);
    yield put(actions.createUserSuccess(user));
  } catch (error) {
    yield put(actions.createUserFailure(error.message));
  }
}

export function* watchCreateUser() {
  yield takeEvery(types.CREATE_USER_REQUEST, postUser);
}

export function* watchFetchEventById() {
  yield takeEvery(types.GET_USER_ID, getUserId);
}
