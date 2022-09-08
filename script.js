function loadGrain(levels) {
  let levelLeftMax = 0;
  let levelRightMax = 0;
  let leftIndex = 0;
  let rightIndex = levels.length - 1;
  let loadGrainTotal = 0;

  while (leftIndex < rightIndex) {
    if (levels[leftIndex] > levelLeftMax) {
      levelLeftMax = levels[leftIndex];
    }
    if (levels[rightIndex] > levelRightMax) {
      levelRightMax = levels[rightIndex];
    }
    if (levelLeftMax >= levelRightMax) {
      loadGrainTotal += levelRightMax - levels[rightIndex];
      rightIndex--;
    } else {
      loadGrainTotal += levelLeftMax - levels[leftIndex];
      leftIndex++;
    }
  }
  return loadGrainTotal;
}

console.log(loadGrain([2, 0, 1, 5, 2, 7]));
