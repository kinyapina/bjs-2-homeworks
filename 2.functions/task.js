function getArrayParams(...arr) {
  let min, max, avg, sum;

  if (!arr.length) {
    return 0;
  }

  min = Math.min(...arr);
  max = Math.max(...arr);

  sum = arr.reduce((sum, item) => sum + +item, 0);

  avg = +(sum / arr.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sum = arr.reduce((sum, item) => sum + +item, 0);

  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min, max;

  if (!arr.length) {
    return 0;
  }

  min = Math.min(...arr);
  max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement, sumOddElement;

  if (!arr.length) {
    return 0;
  }

  sumEvenElement = arr.reduce((sumEvenElement, item) => sumEvenElement += item % 2 ? 0 : item, 0);

  sumOddElement = arr.reduce((sumOddElement, item) => sumOddElement += item % 2 ? item : 0, 0);

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement, countOfOdd = 0;

  if (!arr.length) {
    return 0;
  }

  sumEvenElement = arr.reduce((sumEvenElement, item) => sumEvenElement += item % 2 ? 0 : item, 0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countOfOdd++;
    }
  }

  return sumEvenElement / countOfOdd;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  if (!arrOfArr.length) {
    return 0;
  }

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}