import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import fetchQuestionsSaga from './sagas/fetch-questions.saga';
import * as reducers from './reducers';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

export default (history, defaultState) => {
  const sagaMiddleware = createSagaMiddleware();  
  const middleware = routerMiddleware(history);
  const middlewareChain = [middleware, sagaMiddleware];
  
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewareChain.push(logger);
  }

  const store = createStore(combineReducers({
    ...reducers,
    router
  }), defaultState, applyMiddleware(...middlewareChain));

  sagaMiddleware.run(fetchQuestionsSaga);

  return store;
};