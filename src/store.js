import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import mySaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const configureStore =  function configureStore(initialState={}) {
  const store = createStore(
   rootReducer,
   initialState,
   applyMiddleware(sagaMiddleware)
 );
 sagaMiddleware.run(mySaga);
 return store;
}

export default configureStore;