import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('Addition', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(2,3)).toEqual(5);
  });
});
