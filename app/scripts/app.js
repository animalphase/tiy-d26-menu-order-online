/* jshint -W138 */
/* jshint -W004 */

import { createStore } from 'redux';
import ajax from './ajax.js';
import loadingMenuView from './view-loading-menu.js';
import menuView from './view-menu.js';
import menuItemView from './view-menu-item.js';
import orderConfirmationView from './view-order-confirmation.js';

export default function app() {

  const menuUrl = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';
  const $appContainer = $('#app');

  const initialState = {
    menuItems: [],
    order: [],
    view: loadingMenuView
  };

  const reducer = function (currentState, action) {
    if (currentState === undefined) {
      return initialState;
    }

    // 'action' comes in. check its 'type' property to switch case
    switch(action.type) {


      case 'LOAD_MENU':
        ajax.loadMenu(store);
        return currentState;


      case 'VIEW_MENU':
        var newState = {
          menuItems: action.menuItems,
          view: menuView
        };
        return Object.assign({}, currentState, newState);


      case 'ADD_ITEM':
        var newState = {};
        return Object.assign({}, currentState, newState);


      case 'PLACE_ORDER':
        // do ajaxy stuff
        // disable controls?
        // callback to confirm order
        return currentState;


      case 'CONFIRM_ORDER':
        // set view to confirmation screen
        var newState = {
          view: orderConfirmationView
        };
        return Object.assign({}, currentState, newState);


      default:
        console.debug('⚠️ reducer(): Unhandled action!', action.type);
        return currentState;
    }
  };
  // end reducer()

  const store = createStore(reducer);

  const render =  function () {
    let state = store.getState();
    $appContainer.html(state.view(store));
  };

  //The store will now run our 'render' function after every event is dispatched.
  store.subscribe(render);
  store.dispatch({ type: 'LOAD_MENU' });
}
