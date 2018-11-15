import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './rootStore';
 let persistor = persistStore(store)

render(
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );