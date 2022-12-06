function analyzeArray(arr) {
  let total = 0;
  let average;
  let min = arr.sort((a, b) => a - b)[0];
  let max = arr.sort((a, b) => b - a)[0];

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    average = total / arr.length;
  }

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

export default analyzeArray;
