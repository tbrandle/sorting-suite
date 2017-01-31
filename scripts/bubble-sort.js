
let newArray = [5, 4, 3, 2, 1]


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

console.log(sortBubble(newArray))

module.exports = sortBubble;
