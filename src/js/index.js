import handleAddProduct from './controllers/handleAddProduct.js';
import $ from './utils/dom.js';
import { renderNavbar, renderAddProduct } from './views/renderInitHTML.js';

function VendingMachine() {
  this.init = () => {
    renderNavbar();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-purchase-menu') {
      renderAddProduct();
      handleAddProduct();
    }
  });
}

const app = new VendingMachine();
app.init();
