import useCodeParam from '../index';

jest.mock('remax', () => {
  return { useQuery: () => ({ q: 'http://www.biying.com?a=1&b=2&a=3' }) };
});

describe('useCodeParam', function () {
  it('should be defined', function () {
    expect(useCodeParam).toBeDefined();
  });
  it('should single param', function () {
    const result = useCodeParam();
    expect(result).toEqual({ a: ['1', '3'], b: '2' });
  });
});
