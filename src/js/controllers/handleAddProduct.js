import $ from '../utils/dom.js';
import { renderProductList, resetProductAddForm } from '../views/productAddView.js';
import Product from '../models/Product.js';
import alertInput from '../views/alert.js';
import { ERROR } from '../utils/constant.js';
import store from '../utils/store.js';

export default function HandleAddProduct() {
  this.products = []; // 이거떄문에 초기화됨 ...
  this.init = () => {
    if (store.getLocalStorage('product')) {
      this.products = store.getLocalStorage('product');
      renderProductList();
    }
  };

  const isProductNameValid = inputName => {
    if (inputName === '') {
      alertInput(ERROR.NAME_BLANK);
      return false;
    }
    return true;
  };
  const isProductPriceValid = inputPrice => {
    if (inputPrice === '') {
      alertInput(ERROR.PRICE_BLANK);
      return false;
    }
    if (inputPrice < 100) {
      alertInput(ERROR.PRICE_TOO_LOW);
      return false;
    }
    if (inputPrice % 10 !== 0) {
      alertInput(ERROR.PRICE_SHOULD_DIVIED_TEN);
      return false;
    }
    return true;
  };
  const isProductQuantityValid = inputquantity => {
    if (inputquantity === '') {
      alertInput(ERROR.QUANTITY_BLANK);
      return false;
    }
    if (inputquantity < 1) {
      alertInput(ERROR.QUANTITY_TOO_LOW);
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
      this.products.push(new Product(inputName, inputPrice, inputquantity));
      store.setLocalStorage(this.products);
      renderProductList();
      resetProductAddForm();
    }
  });
  this.init();
}
