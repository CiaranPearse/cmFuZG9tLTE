/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */

const fetchData = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

const fetchProducts = async () => {
  let cart = await fetchData('http://localhost:4002/cart/');
  let products = await fetchData('http://localhost:4002/products/');

  let cartData = cart.map((item)=>{
    return products.filter(
      (product)=>{
        return product.id == item.id;
      })[0];
    });
  return cartData;
}

const buildTableCells = (text)=>{
  const td = document.createElement('td');
  td.innerHTML = text;
  return td;
};
const View = {
  init: async () => {
    const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');

    const productsInCart = await fetchProducts();
    productsInCart.forEach((item, i) => {
      const productTableRow = document.createElement('tr');
      const productId = buildTableCells(item.id);
      const productName = buildTableCells(item.name);

      productTableRow.appendChild(productId);
      productTableRow.appendChild(productName);

      if (i % 2 === 0) {
        productTableRow.classList.add('even-row');
      }

      tbodyElem.appendChild(productTableRow);
    });
  }
};
document.addEventListener('DOMContentLoaded', View.init);
