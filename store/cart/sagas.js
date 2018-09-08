import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import { FETCH_EVENTS_SUCCESS } from '../events/constants';
import { FETCH_EVENT_SUCCESS } from '../event/constants';
import * as types from './constants';
import { getCart, createCart } from '../../resources/events';

function* fetchCart() {
  try {
    yield put(actions.fetchCartRequest());
    const cart = yield call(getCart);
    yield put(actions.fetchCartSuccess(cart));
  } catch (error) {
    yield put(actions.fetchCartFailure(error.message));
  }
}

function* postCart(payload) {
  try {
    const cart = yield call(createCart, payload.action);
    yield put(actions.createCartSuccess(cart));
  } catch (error) {
    yield put(actions.createCartFailure(error.message));
  }
}

export function* watchGetCartByUser() {
  yield [
    takeEvery(FETCH_EVENTS_SUCCESS, fetchCart),
    takeEvery(FETCH_EVENT_SUCCESS, fetchCart)
  ];
}

export function* watchCreateCart() {
  yield takeEvery(types.CREATE_CART_REQUEST, postCart);
}
