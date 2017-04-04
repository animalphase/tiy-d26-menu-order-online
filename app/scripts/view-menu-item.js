/* jshint -W138 */
/* jshint -W004 */

export default function menuItemView(menuItem) {
  let $viewContent = $(`<div class="menu-item">
                          <h4 class="item-name">${menuItem.item}</h4>
                          <p class="item-price">${menuItem.price}</p>
                          <p class="item-description">${menuItem.description}</p>
                        </div>`);
  return $viewContent;
}
