import { renderHook, act } from '@testing-library/react-hooks';
import useSetState from '../index';

describe('useSetState', () => {
  it('should be defined', () => {
    expect(useSetState).toBeDefined();
  });

  const setUp = <T extends object>(initialState: T) =>
    renderHook(() => {
      const [state, setState] = useSetState<T>(initialState);
      return { state, setState } as const;
    });

  it('should support initialValue', function () {
    const hook = setUp({ hello: 'world' });
    expect(hook.result.current.state).toEqual({ hello: 'world' });
  });

  it('should support object', function () {
    const hook = setUp<any>({ hello: 'world' });
    act(() => {
      hook.result.current.setState({ foo: 'bar' });
    });
    expect(hook.result.current.state).toEqual({ hello: 'world', foo: 'bar' });
  });

  it('should support function update', () => {
    const hook = setUp({
      count: 0,
    });
    act(() => {
      hook.result.current.setState((prevState) => ({ count: prevState.count + 1 }));
    });
    expect(hook.result.current.state).toEqual({ count: 1 });
  });
});
