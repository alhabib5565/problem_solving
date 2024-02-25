// problem :  Richest Customer Wealth

const maximumWealth = (accounts) => {
  let richest = 0;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];

    const totalAmoutn = account.reduce((acc, current) => {
      return (acc += current);
    }, 0);
    if (totalAmoutn > richest) {
      richest = totalAmoutn;
    }
  }
  return richest;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // output: 10
