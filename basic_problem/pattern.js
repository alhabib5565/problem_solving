// rectangle patter
const rectanglePattern = (rows, columns) => {
  let rectangle = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      rectangle += "*";
      if (j === columns - 1) {
        rectangle += "\n";
      }
    }
  }
  return rectangle;
};

// console.log(rectanglePattern(5, 4));

//Hollow rectangle pattern
const hollowRectanglePatter = (rows, columns) => {
  let hollowRectangle = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (r === 0 || r === rows - 1) {
        hollowRectangle += "*";
      } else {
        if (c === 0 || c === columns - 1) {
          hollowRectangle += "*";
        } else {
          hollowRectangle += " ";
        }
      }
    }
    hollowRectangle += "\n";
  }
  return hollowRectangle;
};

// console.log(hollowRectanglePatter(5, 4));
/*
output: 
       ****
       *  *
       *  *
       *  *
       ****
 */

const invertedHalfPyramid = (number) => {
  let pyramid = "";
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number - i; j++) {
      pyramid += "*";
    }
    pyramid += "\n";
  }
  return pyramid;
};

console.log(invertedHalfPyramid(5));
