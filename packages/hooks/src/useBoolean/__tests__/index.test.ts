import { act, renderHook } from '@testing-library/react-hooks';
import useBoolean from '../index';

const setUp = (defaultValue: boolean = false) => renderHook(() => useBoolean(defaultValue));

describe('useBoolean', () => {
  it('should be defined', function () {
    expect(useBoolean).toBeDefined();
  });
});
