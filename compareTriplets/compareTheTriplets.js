function compareTriplets(a, b) {

  arrayResult = [0, 0]

  for(i = 0; i <= 2; i ++) {
    if (a[i] > b[i]) {
      arrayResult[0] += 1;
    } else if (a[i] < b[i]) {
      arrayResult[1] +=1
    } else {
      arrayResult[0, 1] += 0;
    }
  }

  return arrayResult
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));