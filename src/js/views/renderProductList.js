import $ from '../utils/dom.js';
import store from '../utils/store.js';

const renderProductList = () => {
  let productList = store.getLocalStorage('product');
  const templete = productList
    .map(product => {
      return `<tr class="product-manage-item">
      <td class="product-manage-name">${product.name}</td>
      <td class="product-manage-price">${product.price}</td>
      <td class="product-manage-quantity">${product.quantity}</td>
    <tr>`;
    })
    .join('');

  $('tbody').innerHTML = templete;
};

export default renderProductList;
