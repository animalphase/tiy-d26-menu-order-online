export default function loadingMenuView(store) {
  let $viewContent = $(`<section class="page-wrapper view-menu">
                          <header class="menu-header"><h1>Moonicorn Café</h1></header>
                        </section>`);

  let $menuSection = $(`<section class="menu">
                          <h2>Loading Menu…</h2>
                        </section>`);


  $viewContent.append($menuSection);


  return $viewContent;
}
