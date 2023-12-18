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

console.log(characterCount("Hello Bangladesh!"));
