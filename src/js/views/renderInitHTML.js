import $ from '../utils/dom.js';

export const renderNavbar = () => {
  $('#app').innerHTML = `
  <header>
  <h1>🥤 자판기</h1>
  <nav>
    <button id="product-purchase-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-add-menu">상품 구매</button>
  </nav>
</header>
<section></section>
`;
};

export const renderAddProduct = () => {
  $('section').innerHTML = `<h2>상품 추가하기</h2>
  <form id="product-add-form">
    <input type="text" id="product-name-input" placeholder="상품명" />
    <input type="number" id="product-price-input" placeholder="가격" />
    <input type="number" id="product-quantity-input" placeholder="수량" />
    <button id="product-add-button">추가하기</button>
  </form>
  <h2>상품 현황</h2>
  <table border = "1" class = "product-manage-item">
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>`;
};

export const renderChargeChange = () => {
  $('section').innerHTML = `<h2>자판기 동전 충전하기</h2>
  <form id="charge-change-form">
    <input type="number" id="vending-machine-charge-input" placeholder="금액(원)" />
    <button id="vending-machine-charge-button">충전하기</button>
  </form>
  <span>보유금액: </span>
  <span id="vending-machine-charge-amount"></span>
  <h2>동전 보유 현황</h2>
  <table border="1" class = "change-manage">
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
      <td>500원</td>
      <td id="vending-machine-coin-500-quantity"></td>
    </tr>
    <tr>
      <td>100원</td>
      <td id="vending-machine-coin-100-quantity"></td>
    </tr>
    <tr>
      <td>50원</td>
      <td id="vending-machine-coin-50-quantity"></td>
    </tr>
    <tr>
      <td>10원</td>
      <td id="vending-machine-coin-10-quantity"></td>
    </tr>
  </table>`;
};

export const renderPurchaseProduct = () => {};
