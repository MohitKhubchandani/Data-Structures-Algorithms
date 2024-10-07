function sortByFractionDescending(arr) {
    arr.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));
    let values = arr.map(item => item[0]);
    let weights = arr.map(item => item[1]);

    return { values, weights };
  };

  function fractionalKnapsack(arr, w, n){
    
    let { values: sortedValue, weights: sortedWeight } = sortByFractionDescending(arr);
    let totalValue = 0;

    for (let i = 0; i < n; i++) {
        if (sortedWeight[i] <= w) {
            totalValue += sortedValue[i]
            w -= sortedWeight[i]
        }else{
         totalValue += sortedValue[i] / sortedWeight[i] * w;
         break;
        }
    }
    return totalValue;
  };

  let arr = [[60, 10], [100, 20], [120, 30]]
  let w = 50, n = 3
  let result = fractionalKnapsack(arr, w, n);
  console.log(result); // Output :- 240
  