import $ from '../utils/dom.js';
import { ERROR } from '../utils/constant.js';
import { chargeMoney } from '../models/ChargeChangeModel.js';
import { Coin } from '../models/ChargeChangeModel.js';
import { renderCoinQuantity } from '../views/chargeChangeView.js';

export function HandleChargeChange() {
  this.coins = Coin;
  this.init = () => {
    if (localStorage.getItem('coin')) {
      this.coins = JSON.parse(localStorage.getItem('coin'));
      renderCoinQuantity();
    }
  };

  const isValidChangeInput = chargeInputValue => {
    if (chargeInputValue % 10 !== 0) return alert(ERROR.CHARGE_SHOULD_DIVIED_TEN);
    else if (chargeInputValue === '') return alert(ERROR.CHARGE_CHANGE_BLANK);
    return true;
  };

  const chargeChange = e => {
    e.preventDefault();
    const chargeInputValue = $('#vending-machine-charge-input').value;

    if (isValidChangeInput(chargeInputValue)) {
      chargeMoney(chargeInputValue, this.coins);
      renderCoinQuantity();
    }
  };

  $('#vending-machine-charge-button').addEventListener('click', chargeChange);

  this.init();
}
