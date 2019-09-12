import {countCapital} from './count.capital';

// Write test suit
describe('Display Count', ()=>{
    it('should return count of capital letters', ()=>{
        expect(countCapital('Kailash')).toEqual(1);
    })
})