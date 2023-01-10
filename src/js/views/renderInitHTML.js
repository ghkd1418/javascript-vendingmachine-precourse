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

export const renderchargechange = () => {};

export const renderPurchaseProduct = () => {};
