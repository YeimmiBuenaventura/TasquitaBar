import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './Components/Products/Store/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Implemented Provider and pass the store that we create.
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
