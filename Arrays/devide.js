//devide array into two parts

function divideArray(array) {
  const midpoint = Math.floor(array.length / 2);

  const leftHalf = array.slice(0, midpoint + 1);
  const rightHalf = array.slice( midpoint);

  return [leftHalf , rightHalf]
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const [leftPart, rightPart] = divideArray(myArray);
console.log("Left part:", leftPart);
console.log("Right part:", rightPart);

