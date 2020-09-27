import { act, renderHook } from '@testing-library/react-hooks';
import useToggle, { IState } from '../index';

const setUp = (defaultValue?: IState, reverseValue?: IState) =>
  renderHook(() => useToggle(defaultValue, reverseValue));

describe('useToggle', function () {
  it('should be defined', function () {
    expect(useToggle).toBeDefined();
  });
  it('should undefined', function () {
    const { result } = setUp();
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].setReverse();
    });
    expect(result.current[0]).toBeTruthy();
    act(() => {
      result.current[1].setDefault();
    });
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].toggle(true);
    });
    expect(result.current[0]).toBeTruthy();
    act(() => {
      result.current[1].toggle(false);
    });
    expect(result.current[0]).toBeFalsy();
    act(() => {
      result.current[1].toggle(2);
    });
    expect(result.current[0]).toEqual(2);
  });
  it('should number', function () {
    const { result } = setUp(1, 2);
    expect(result.current[0]).toEqual(1);
    act(() => {
      result.current[1].setReverse();
    });
    expect(result.current[0]).toEqual(2);
    act(() => {
      result.current[1].setDefault();
    });
    expect(result.current[0]).toEqual(1);
    act(() => {
      result.current[1].toggle(1);
    });
    expect(result.current[0]).toEqual(1);
  });
});
