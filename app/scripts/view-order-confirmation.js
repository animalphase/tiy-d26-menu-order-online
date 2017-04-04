/* jshint -W138 */
/* jshint -W004 */

import menuItemInOrderView from './view-menu-item-in-order.js';


export default function orderConfirmationView(store) {
  let $viewContent = $(`<section class="page-wrapper order-confirmation">
                          <header class="menu-header"><h1>Moonicorn Café</h1></header>
                          <h2>Order confirmed!</h2>
                          <p>Your order has been placed</p>
                          <p>It will be on it's way to you soon!</p>
                          <div class="order-summary">
                            <h3>Order Summary:</h3>
                            <hr>
                          </div>
                        </section>`);

  let $orderSummary = $viewContent.find('.order-summary');

  let state = store.getState();
  let order = store.getState().order;

  order.forEach( (menuItem, i, array) => {
    $orderSummary.append(menuItemInOrderView(menuItem));
  });

  $orderSummary.append(`<hr> 
                        <div class="order-cost">
                          <p>Tax (8%): ${state.orderTax}</p>
                          <p>Total: ${state.orderTotal}</p>
                        </div>`);

  return $viewContent;
}
