const sumOfNumbeers = (...numbers) => {
  const total = numbers.reduce((previousValue, currentValue) => {
    return (previousValue = previousValue + currentValue);
  }, 0);
  return total;
};

console.log(sumOfNumbeers(5, 10, 15));
