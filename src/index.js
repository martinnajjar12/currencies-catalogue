import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@fontsource/lato';
import App from './containers/App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
