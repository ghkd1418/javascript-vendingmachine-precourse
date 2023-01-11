import $ from '../utils/dom.js';
import store from '../utils/store.js';

export const renderProductList = () => {
  const templete = store
    .getLocalStorage('product')
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

export const resetProductAddForm = () => {
  $('#product-add-form').reset();
};
