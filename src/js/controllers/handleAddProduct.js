import $ from '../utils/dom.js';
import renderProductList from '../views/renderProductList.js';
// import Product from '../models/Product.js';
import alertInput from '../views/alert.js';
import { ERROR } from '../utils/constant.js';

const handleAddProduct = () => {
  const isProductNameValid = inputName => {
    if (inputName === '') {
      alertInput(ERROR.INPUT_BLANK);
      return false;
    }
    return true;
  };
  const isProductPriceValid = inputPrice => {
    if (inputPrice === '') {
      alertInput(ERROR.INPUT_BLANK);
      return false;
    }
    return true;
  };
  const isProductQuantityValid = inputquantity => {
    if (inputquantity === '') {
      alertInput(ERROR.INPUT_BLANK);
      return false;
    }
    return true;
  };

  $('#product-add-button').addEventListener('click', e => {
    e.preventDefault();

    const inputName = $('#product-name-input').value;
    const inputPrice = $('#product-price-input').value;
    const inputquantity = $('#product-quantity-input').value;

    if (isProductNameValid(inputName) && isProductPriceValid(inputPrice) && isProductQuantityValid(inputquantity)) {
      // Product();
      console.log('통과');
      renderProductList();
    }
  });
};

export default handleAddProduct;
