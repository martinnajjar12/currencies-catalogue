import whichBackground from '../../utils/whichBackground';

describe('whichBackground funcion', () => {
  it('should return #db4681 when the counter is 0', () => {
    expect(whichBackground(0)).toEqual({ backgroundColor: '#db4681' });
  });

  it('should return #db4681 when the counter is 1', () => {
    expect(whichBackground(1)).toEqual({ backgroundColor: '#db4681' });
  });

  it('should return #cf4278 when the counter is 2', () => {
    expect(whichBackground(2)).toEqual({ backgroundColor: '#cf4278' });
  });

  it('should return #cf4278 when the counter is 3', () => {
    expect(whichBackground(3)).toEqual({ backgroundColor: '#cf4278' });
  });
});
