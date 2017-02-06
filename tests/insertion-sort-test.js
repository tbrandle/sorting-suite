import { expect } from 'chai';
import sortBubble from '../scripts/insertion-sort.js'


describe('insertion sort', function () {

  it('should sort an array using insertion sort', function () {
    let newArray = [1, 2, 5, 4, 3]

    expect(sortBubble(newArray)).to.deep.equal([1, 2, 3, 4, 5])

  })

  it('should sort an array using insertion sort', function () {
    let newArray = ['e', 'd', 'c', 'a', 'b']

    expect(sortBubble(newArray)).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  });

})
