import { useMemo, useState } from 'react';

export type IState = string | number | boolean | undefined;

export interface Action<T = IState> {
  setDefault: () => void;
  setReverse: () => void;
  toggle: (value?: T) => void;
}
function useToggle<T = boolean | undefined>(): [boolean, Action<T>];
function useToggle<T = IState>(defaultValue: T): [T, Action<T>];
function useToggle<T = IState, U = IState>(
  defaultValue: T,
  reverseValue: U,
): [T | U, Action<T | U>];
function useToggle<D extends IState = IState, R extends IState = IState>(
  defaultValue: D = false as D,
  reverseValue?: R,
) {
  const [state, setState] = useState<D | R>(defaultValue);
  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
    function setDefault(): void {
      setState(defaultValue);
    }
    function setReverse(): void {
      setState(reverseValueOrigin);
    }
    function toggle(value?: R | D): void {
      if (value !== undefined) {
        setState(value);
        return;
      }
      setState((prev) => (prev === defaultValue ? reverseValueOrigin : defaultValue));
    }
    return {
      setDefault,
      setReverse,
      toggle,
    };
  }, [defaultValue, reverseValue]);
  return [state, actions];
}
export default useToggle;
