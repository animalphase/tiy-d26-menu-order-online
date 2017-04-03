/* jshint -W138 */
/* jshint -W004 */

import { createStore } from 'redux';
import MenuView from './view-menu.js';

export default function app() {

  const $appContainer = $('#app');

  const initialState = {
    currentUser: null,
    loadingTodos: false,
    order: [],
    view: MenuView
  };

  const reducer = function (currentState, action) {
    if (currentState === undefined) {
      return initialState;
    }

    switch(action.type) {


      case 'LOGIN_USER':
        var newState = {
          loadingTodos: true,
          currentUser: action.user,
          // view: todoListView
        };
        $.getJSON(url).then((data) => {
          store.dispatch({ type: 'TODOS_LOADED', order: data });
        });
        return Object.assign({}, currentState, newState);


      case 'LOAD_TODOS':
        $.getJSON(url).then((data) => {
          store.dispatch({ type: 'TODOS_LOADED', order: data });
        });
        return currentState;


      case 'TODOS_LOADED':
        var newState = {
           order: action.order,
           loadingTodos: false
        };
        return Object.assign({}, currentState, newState);


      case 'CREATE_TODO':
        $.ajax({
          url: url,
          type: 'POST',
          dataType: 'JSON',
          data: {
            name: action.todo,
            complete: false
          }
        }).then(function () {
          store.dispatch({ type: 'LOAD_TODOS' });
        });
        return currentState;


      case 'DELETE_TODO':
        var todo = action.todo;
        $.ajax({
          url: `${url}/${todo._id}`,
          type: 'DELETE',
        }).then((data) => {
          store.dispatch({ type: 'LOAD_TODOS' });
        });
        return currentState;


      case 'NOOP':
        return currentState;


      default:
        console.debug('Unhandled action!', action.type);
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
  store.dispatch({ type: 'NOOP' });
}
