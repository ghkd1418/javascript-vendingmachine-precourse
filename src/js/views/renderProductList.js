import $ from '../utils/dom.js';

const renderProductList = () => {
  $('.product-manage-item').insertAdjacentHTML('beforeend', '<tr><td>첫번째 칸</td><td>두번째 칸</td></tr>');
};

export default renderProductList;
