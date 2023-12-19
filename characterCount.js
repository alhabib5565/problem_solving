const characterCount = (str) => {
  let characterList = {};
  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();
    const allChar = "abcdefghijklmnopqrstuvwxyz";

    if (!allChar.includes(character)) continue;

    if (characterList[character] > 0) {
      //   console.log(characterList[character]);
      characterList[character]++;
    } else {
      characterList[character] = 1;
    }
  }
  return characterList;
};

console.log(characterCount("Hello Bangladesh!")); // output: { h: 2, e: 2, l: 3, o: 1, b: 1, a: 2, n: 1, g: 1, d: 1, s: 1 }
