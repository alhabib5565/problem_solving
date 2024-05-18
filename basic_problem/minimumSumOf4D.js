//Minimum Sum of Four Digit Number After Splitting Digits

const minimumSumOf4Digits = (number) => {
  const numArray = number.toString().split("").sort();
  const minimumSum =
    Number(numArray[0] + numArray[2]) + Number(numArray[1] + numArray[3]);
  return minimumSum;
};

// console.log(minimumSumOf4Digits(2932));
