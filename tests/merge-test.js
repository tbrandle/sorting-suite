import { expect } from 'chai';
import mergeSort from '../scripts/merge.js'


describe('merge sort', function () {

  it('should sort an array using merge sort', function () {
    let newArray = [1, 2, 5, 4, 3]

    expect(mergeSort(newArray)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort an array using merge sort', function () {
    let newArray = ['e', 'd', 'c', 'a', 'b']

    expect(sortBubble(newArray)).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  });

})
