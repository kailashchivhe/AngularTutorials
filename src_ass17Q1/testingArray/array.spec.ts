import {arrayAddition} from './array'

describe('check array addition',()=>{
    it('should return array addition',()=>{
        expect(arrayAddition([1,2,3])).toEqual(6);
    })
})