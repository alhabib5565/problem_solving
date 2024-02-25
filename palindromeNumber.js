const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }

  let rev = 0;
  while (x > rev) {
    // rev = 1, x = 12, 1st
    // rev = 12 , x = 1, 2nd
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  console.log({ rev, x, a: Math.floor(rev / 10) });
  return rev === x || x === Math.floor(rev / 10);
};

console.log(isPalindrome(121));
