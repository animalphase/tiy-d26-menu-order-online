

const menuUrl = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';



const ajax = {

  loadMenu: (store) => {
    $.getJSON(menuUrl).then( (data) => {
      // setTimeout to preview loading animation
      setTimeout(() => {
        console.log('🥑 menu loaded: ', data, '\n---------- ');
        store.dispatch({ type: "VIEW_MENU", menuItems: data });
      }, 1000);
    });
  }
  
};


export default ajax;
