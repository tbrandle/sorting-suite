let newArray = [5, 3, 6, 7, 8, 4]


function mergeSort(newArray) {
  debugger
  let combinedArray = []
  for (let i = 0; i < newArray.length; i++) {
    combinedArray.push([newArray[i]])
  }
  let middle = Math.floor(combinedArray.length / 2)
  console.log(combinedArray);
  combinedArrayCompare(combinedArray)
}


function combinedArrayCompare(combinedArray) {
  debugger;
  let j, k
  if (combinedArray.length > 1) {

    for (j = 0, k = 1; j < middle; j++, k++) {

      if (combinedArray[j] < combinedArray[k]) {
        let value = combinedArray[k].shift();
        newCombinedArray.push(value)
        combinedArray[j].push(value);
        console.log(combinedArray[j]);
        } else {
          let value = combinedArray[j].shift();
          combinedArray[k].push(value)
          console.log(combinedArray[k]);
        }

      }
      removeEmptyArray(combinedArray)
    } else {
    finalCombineArray(combinedArray)
  }
  console.log(combinedArray);
  // combinedArrayCompare(combinedArray)
}



function removeEmptyArray(combinedArray) {
  for (let i = 0; i < combinedArray.length; i++) {
    if (combinedArray[i].length) {
      console.log("has item");
    } else {
      console.log(combinedArray[i]);
      combinedArray.splice(i, 1)
      console.log(combinedArray);
      removeEmptyArray(combinedArray)
    }
  }
  combinedArrayCompare(combinedArray)
}


function finalCombineArray(combinedArray) {
  debugger
  if (combinedArray.length <= newArray.length) {

  for (let i = 0; i < combinedArray.length; i++) {
    let value = combinedArray[i].shift();
    combinedArray.push(value)
    finalCombineArray(combinedArray);
    }
  }
  combinedArray.shift();
  return combinedArray;
}

mergeSort(newArray)
// module.exports = mergeSort;
