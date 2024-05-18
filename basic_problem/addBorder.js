const addBorder = (pictures) => {
  const asterisks = "*".repeat(picture[0].length);

  //   for (let i = 0; i < pictures.length; i++) {
  //     const element = array[i];

  //   }
  pictures.push(asterisks);
  pictures.unshift(asterisks);
  return pictures.map((picture) => "*".concat(picture, "*"));
};

const picture = ["abc", "ded", "habib"];
console.log(addBorder(picture)); // [“*****”, “*abc*”, “*ded*”, “*****”]
