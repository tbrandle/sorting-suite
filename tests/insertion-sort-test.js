import { expect } from 'chai';
import sortBubble from '../scripts/insertion-sort.js'


describe('insertion sort', function () {

  it('should sort an array using insertion sort', function () {
    let newArray = [1, 2, 5, 4, 3]

    expect(insertionSort(newArray)).to.deep.equal([1, 2, 3, 4, 5])
  })

})
