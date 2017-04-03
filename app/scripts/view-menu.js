/* jshint -W138 */
/* jshint -W004 */

export default function menuView(store) {
  let $viewContent = $(`<section class="page-wrapper view-menu">
                          <header class="menu-header"><h1>Moonicorn Café</h1></header>
                        </section>`);

  let $menuSection = $(`<section class="menu">
                          <h2>Menu</h2>
                        </section>`);

  let $orderModule = $(`<aside class="reader-nav">
                          <h3>Your Order</h3>
                        </aside>`);


  $viewContent.append($menuSection);
  $viewContent.append($orderModule);


  return $viewContent;
}
