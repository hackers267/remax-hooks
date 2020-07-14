import { useMemo, useState } from 'react';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, setState] = useState<boolean>(defaultValue);
  const actions: Actions = useMemo(() => {
    function setTrue() {
      setState(true);
    }

    function setFalse() {
      setState(false);
    }

    return { setTrue, setFalse };
  }, []);
  return [state, actions];
}
