const store = {
  setLocalStorage(Product) {
    localStorage.setItem('product', JSON.stringify(Product));
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default store;
