import { act,RenderResult as HookResult, renderHook } from '@testing-library/react-hooks';
import useStep from '../index';
import { Actions, State } from '../interface';

const setUp = (array: any[], loop = false) => renderHook(() => useStep(array, loop));

describe('useStep no loop', function () {
  it('should be defined', function () {
    expect(useStep).toBeDefined();
  });
  it('should be start', function () {
    const array = [1, 2, 3, 4];
    const { result } = setUp(array);
    const { prev } = result.current[1];
    isStart(result);
    notEnd(result);
    expectValue(result, 1);
    expectPosition(result, 0);
    act(() => {
      prev();
    });
    isStart(result);
    notEnd(result);
    expectValue(result, 1);
    expectPosition(result, 0);
  });
  it('should be next', function () {
    const array = [1, 2, 3, 4];
    const { result } = setUp(array);
    act(() => {
      result.current[1].next();
    });
    notStartAndEnd(result);
    expectValue(result, 2);
    expectPosition(result, 1);
  });
  it('should be prev', function () {
    const array = [1, 2, 3, 4];
    const { result } = setUp(array);
    const { prev, next } = result.current[1];
    act(() => {
      next();
      next();
    });
    notStartAndEnd(result);
    expectValue(result, 3);
    expectPosition(result, 2);
    act(() => {
      prev();
    });
    notStartAndEnd(result);
    expectValue(result, 2);
    expectPosition(result, 1);
  });
  it('should be end', () => {
    const array = [1, 2];
    const { result } = setUp(array);
    const { next } = result.current[1];
    notEnd(result);
    act(() => {
      next();
    });
    isEnd(result);
    expectValue(result, 2);
    expectPosition(result, 1);
    act(() => {
      next();
    });
    isEnd(result);
    expectValue(result, 2);
    expectPosition(result, 1);
  });
});
describe('useStep loop', () => {
  it('should be end', function () {
    const array = [1, 2, 3];
    const { result } = setUp(array, true);
    const { prev } = result.current[1];
    isStart(result);
    notEnd(result);
    expectValue(result, 1);
    expectPosition(result, 0);
    act(() => {
      prev();
    });
    notStart(result);
    isEnd(result);
    expectValue(result, 3);
    expectPosition(result, 2);
  });
  it('should be start', function () {
    const array = [1, 2];
    const { result } = setUp(array, true);
    const { next } = result.current[1];
    act(() => {
      next();
    });
    notStart(result);
    isEnd(result);
    expectValue(result, 2);
    expectPosition(result, 1);
    act(() => {
      next();
    });
    isStart(result);
    notEnd(result);
    expectValue(result, 1);
    expectPosition(result, 0);
  });
});
function notStart(result: HookResult<[State, Actions]>) {
  expect(result.current[0].isStart).toBeFalsy();
}

function notEnd(result: HookResult<[State, Actions]>) {
  expect(result.current[0].isEnd).toBeFalsy();
}

function expectValue(result: HookResult<[State, Actions]>, expected: number) {
  expect(result.current[0].value).toEqual(expected);
}
function expectPosition(result: HookResult<[State, Actions]>, position: number) {
  expect(result.current[0].position).toEqual(position);
}
function notStartAndEnd(result: HookResult<[State, Actions]>) {
  notStart(result);
  notEnd(result);
}
function isStart(result: HookResult<[State, Actions]>) {
  expect(result.current[0].isStart).toBeTruthy();
}
function isEnd(result: HookResult<[State, Actions]>) {
  expect(result.current[0].isEnd).toBeTruthy();
}
