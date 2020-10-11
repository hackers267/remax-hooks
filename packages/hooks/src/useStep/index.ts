import { useState } from 'react';
import { Actions, State } from './interface';

function useStep(array: any[], loop = false): [State, Actions] {
  const data = array.slice();
  const length = data.length;
  const last = length - 1;
  const [cur, setCur] = useState(0);
  function next() {
    setCur((cur) => {
      if (loop) {
        return cur >= last ? last - length + 1 : cur + 1;
      }
      return cur >= last ? last : cur + 1;
    });
  }
  function prev() {
    setCur((cur) => {
      if (loop) {
        return cur - 1 <= 0 ? cur + length - 1 : cur - 1;
      }
      return cur - 1 <= 0 ? 0 : cur - 1;
    });
  }
  const actions = { prev, next };
  const state = { value: data[cur], isStart: cur === 0, isEnd: cur === last, position: cur };
  return [state, actions];
}
export default useStep;
