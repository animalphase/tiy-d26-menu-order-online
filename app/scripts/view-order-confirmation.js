/* jshint -W138 */
/* jshint -W004 */

export default function orderConfirmationView(store) {
  let $viewContent = $(`<section class="page-wrapper order-confirmation">
                          <header class="menu-header"><h1>Moonicorn Café</h1></header>
                          <h2>Order confirmed!</h2>
                          <p>Your order has been placed</>
                        </section>`);


  return $viewContent;
}
