let mergeArray = [9, 2, 5, 4, 3, 9, 8, 1, 18, 20, 22, 47, 12, 3, 4]


function mergeSort(newArray) {
  debugger;

  if (newArray.length < 2){
    return newArray
  }

  let middle = parseInt(newArray.length / 2)
  let leftArray = newArray.slice(0, middle)
  let rightArray = newArray.slice(middle, newArray.length
  return compare(mergeSort(leftArray), mergeSort(rightArray))
}


function compare(leftArray, rightArray) {
  debugger
  let array = []
  let i = 0

  while(leftArray.length || rightArray.length) {
    if (leftArray[i] < rightArray[i] || rightArray.length < 1) {
      array.push(leftArray[i])
      leftArray.shift()
    } else if (leftArray[i] > rightArray[i] || leftArray.length < 1) {
      array.push(rightArray[i])
      rightArray.shift()
    }
  }
  return array
}

mergeSort(mergeArray)

module.exports = mergeSort;
