const romanToInteger = (s) => {
  const splited = s.split("");

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let integer = 0;
  for (let i = 0; i < splited.length; i++) {
    const current = splited[i];
    const next = splited[i + 1];
    if (roman[current] < roman[next]) {
      integer += roman[next] - roman[current];
      i++;
    } else {
      integer += roman[current];
    }
  }
  return integer;
};

console.log(romanToInteger("MDCCLXXVI")); // output: 1776
