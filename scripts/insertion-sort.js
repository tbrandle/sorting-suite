
let array = [5, 2, 1, 4, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let currentIndex = i
    let counter = currentIndex -1
    for (let j = counter ; j >= 0; j-- ) {
      let value = array[j]
      let previous = array[j-1] || '0';
      if (current < value && current > previous) {
        array.splice(i, 1)
        array.splice(j, 0, current)
      }
    }
  }
  return array;
}

insertionSort(array)

module.exports = insertionSort;
