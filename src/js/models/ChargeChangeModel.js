export const Coin = {
  amount: 0,
  500: 0,
  100: 0,
  50: 0,
  10: 0,
};

const randomChange = () => MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);

export const chargeMoney = (chargeInputValue, coins) => {
  coins['amount'] += Number(chargeInputValue);
  while (chargeInputValue) {
    const coin = randomChange();
    if (coin > chargeInputValue) continue;
    else {
      chargeInputValue -= coin;
      coins[coin] += 1;
    }
  }
  localStorage.setItem('coin', JSON.stringify(coins));
  return coins;
};
