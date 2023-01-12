import HandleAddProduct from './controllers/handleAddProduct.js';
import $ from './utils/dom.js';
import { renderNavbar, renderAddProduct, renderChargeChange } from './views/renderInitHTML.js';
import { HandleChargeChange } from './controllers/HandleChargeChange.js';

function VendingMachine() {
  this.init = () => {
    renderNavbar();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-purchase-menu') {
      renderAddProduct();
      new HandleAddProduct();
      return;
    } else if (e.target.id === 'vending-machine-manage-menu') {
      renderChargeChange();
      new HandleChargeChange();
      return;
    }
  });
}

const app = new VendingMachine();
app.init();
