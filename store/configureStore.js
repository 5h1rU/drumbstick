import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    // const { composeWithDevTools } = require('redux-devtools-extension');
    return applyMiddleware(...middleware);
  }
  return applyMiddleware(...middleware);
};

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware, createLogger()])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
};

export default configureStore;
