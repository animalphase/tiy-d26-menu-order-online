/* jshint -W138 */
/* jshint -W004 */
/* jshint -W083 */
/* jshint -W008 */

import menuItemView from './view-menu-item.js';
import menuItemInOrderView from './view-menu-item-in-order.js';


export default function menuView(store) {
  let $viewContent = $(`<section class="page-wrapper view-menu">
                          <header class="menu-header"><h1>Moonside Café</h1></header>
                        </section>`);

  let $menuSection = $(`<section class="menu">
                          <h2>Menu</h2>
                          <div class="menu-wrapper">
                          </div>
                        </section>`);
  let $menuWrapper = $menuSection.find('.menu-wrapper');

  let $orderModule = $(`<aside class="your-order">
                          <h3>Your Order</h3>
                        </aside>`);


  let menu = store.getState().menuItems;


  // assemble menu items
  let $menuContent = $('<div class="menu-content">');
  $menuWrapper.append($menuContent);

  for (let category in menu) {
    $menuContent.append(`<h3 class="food-category">${category}</h3>`);
    menu[category].forEach( (menuItem, i, array) => {
      $menuContent.append( menuItemView(store, menuItem));
    });
  }


  let state = store.getState();
  let order = store.getState().order;

  order.forEach( (menuItem, i, array) => {
    $orderModule.append(menuItemInOrderView(menuItem));
  });

  $orderModule.append(` <div class="order-cost">
                          <p>Tax (8%): ${state.orderTax}</p>
                          <p>Total: ${state.orderTotal}</p>
                        </div>`);


  let $btnPlaceOrder = $('<button class="btn btn-place-order" type="button" name="button">Place Order</button>');
  $orderModule.append($btnPlaceOrder);

  if(order.length <= 0) {
    $btnPlaceOrder.prop('disabled', true);
  } else {
    $btnPlaceOrder.prop('disabled', false);
  }


  $menuWrapper.append($orderModule);
  $viewContent.append($menuSection);


  $btnPlaceOrder.on('click', () => {
    store.dispatch({ type: 'PLACE_ORDER' });
  });


  return $viewContent;
}
