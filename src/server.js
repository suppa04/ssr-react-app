import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'


module.exports = function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)
  console.log('this is the store', store);

  // render the App store static markup in content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()
  console.log('this is the preloadedState', preloadedState);

  return {content, preloadedState};
}
