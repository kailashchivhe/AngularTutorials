import {checkPassword} from "./Password"

describe('Check Password',()=>{
    it('Vaidate password',()=>{
        expect(checkPassword('HiKai@12')).toEqual(true);
    })
})