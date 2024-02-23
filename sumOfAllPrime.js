const sumOfAllPrime = (number) => {
  let primeNumbers = [];
  for (let i = 2; i < number; i++) {
    for (let j = 2; j < number; j++) {
      if (i === j) {
        primeNumbers.push(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }

  const total = primeNumbers.reduce((previousValue, currentValue) => {
    return (previousValue += currentValue);
  }, 0);
  console.log(total);
};

sumOfAllPrime(10); // output: 17
