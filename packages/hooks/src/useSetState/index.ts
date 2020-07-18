import { useCallback, useState } from 'react';

const useSetState = <T extends object>(
  initialState: T = {} as T,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  const [state, setState] = useState(initialState);
  const setMergeState = useCallback(
    (patch) => {
      setState((prevState) =>
        Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch),
      );
    },
    [state],
  );
  return [state, setMergeState];
};

export default useSetState;
