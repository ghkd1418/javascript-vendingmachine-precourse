import $ from '../utils/dom.js';

export const renderCoinQuantity = () => {
  if (localStorage.getItem('coin')) {
    const { 10: coin10, 50: coin50, 100: coin100, 500: coin500, amount } = JSON.parse(localStorage.getItem('coin'));
    $('#vending-machine-charge-amount').innerText = amount;
    $('#vending-machine-coin-10-quantity').innerText = coin10;
    $('#vending-machine-coin-50-quantity').innerText = coin50;
    $('#vending-machine-coin-100-quantity').innerText = coin100;
    $('#vending-machine-coin-500-quantity').innerText = coin500;
  }
};

export const resetChargeChangeForm = () => {
  $('#charge-change-form').reset();
};
