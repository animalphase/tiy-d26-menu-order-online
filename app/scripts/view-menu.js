/* jshint -W138 */
/* jshint -W004 */
/* jshint -W083 */

import menuItemView from './view-menu-item.js';


export default function menuView(store) {
  let $viewContent = $(`<section class="page-wrapper view-menu">
                          <header class="menu-header"><h1>Moonside Café</h1></header>
                        </section>`);

  let $menuSection = $(`<section class="menu">
                          <h2>Menu</h2>
                        </section>`);

  let $orderModule = $(`<aside class="reader-nav">
                          <h3>Your Order</h3>
                        </aside>`);


  let menu = store.getState().menuItems;
    for (let category in menu) {
      $menuSection.append(`<h3 class="food-category">${category}</h3>`);
      menu[category].forEach( (menuItem, i, array) => {
        $menuSection.append(menuItemView(menuItem));
      });
  }

  $viewContent.append($menuSection);
  $viewContent.append($orderModule);


  return $viewContent;
}
