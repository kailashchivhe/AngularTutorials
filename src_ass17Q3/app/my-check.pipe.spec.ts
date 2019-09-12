import { MyCheckPipe } from './my-check.pipe';

describe('MyCheckPipe', () => {
  let pipe: MyCheckPipe;
  beforeEach(()=>{
    pipe = new MyCheckPipe();
  })
  it('check Prime ', () => {
    expect(pipe.transform(5,"Prime")).toEqual("Prime Number");
  });
  it('check Perfect ', () => {
    expect(pipe.transform(6,"Perfect")).toEqual("Perfect Number");
  });
  it('check even ', () => {
    expect(pipe.transform(4,"Even")).toEqual("It is even number");
  });
  it('check odd ', () => {
    expect(pipe.transform(5,"Odd")).toEqual("It is odd number");
  });
});
