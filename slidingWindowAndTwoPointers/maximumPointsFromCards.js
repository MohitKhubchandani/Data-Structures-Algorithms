function maximumPointsObtainedFromCards(cardPoints , k){
  let lSum = 0, rSum = 0;
  let rightIndex = 1;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    lSum += cardPoints[i];
    maxSum = lSum;
  };

  for (let i = k - 1; i >= 0; i--) {
    lSum -= cardPoints[i];
    rSum += cardPoints[cardPoints.length - rightIndex];
    rightIndex++;
    let sum = lSum + rSum;
    maxSum = Math.max(maxSum, sum);
  };

  return maxSum;
};

const cardPoints = [96,90,41,82,39,74,64,50,30];
const k = 8;
const Output = maximumPointsObtainedFromCards(cardPoints , k);
console.log(Output) // Output :- 536