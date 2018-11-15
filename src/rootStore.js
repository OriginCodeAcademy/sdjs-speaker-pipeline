import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  whitelist: ['AdminLogin'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
export default () => {
  let rootStore = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(
      applyMiddleware(
        promiseMiddleware()
      )
    )
  );
  let persistor = persistStore(store)
  return { rootStore, persistor }
}
/* eslint-enable */
