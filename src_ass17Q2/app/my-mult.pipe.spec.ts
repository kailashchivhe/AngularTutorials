import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('Multiply', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(2,3)).toEqual(6);
  });
});
