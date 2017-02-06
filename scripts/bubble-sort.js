
let newArray = [4, 1, 5, 3, 2]

function sortBubble(array) {
  for (let i = 0; i < array.length -1 ; i++) {
    let current = array[i];
    let next = array[i+1];
    if (current > next) {
      array.splice(i, 2, next, current)
      sortBubble(array)
    }
  }
  return array;
}

module.exports = sortBubble;
