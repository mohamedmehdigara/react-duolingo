import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProgressProvider } from './ProgressContext';

ReactDOM.render(
  <ProgressProvider>
    <App />
  </ProgressProvider>,
  document.getElementById('root')
);
