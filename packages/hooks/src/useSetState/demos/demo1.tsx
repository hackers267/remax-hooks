import React from 'react';
import { useSetState } from 'remax-hook';
import { Button, View } from 'remax/one';

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

export default () => {
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <View>
      <View>{JSON.stringify(state, null, 2)}</View>
      <View className="button_wrapper">
        <Button className="button" onTap={() => setState({ hello: 'world' })}>
          set hello
        </Button>
        <Button
          className="button"
          onTap={() => setState({ foo: 'bar' })}
          style={{ margin: '0 16px' }}
        >
          set foo
        </Button>
        <Button className="button" onTap={() => setState((prev) => ({ count: prev.count + 1 }))}>
          count + 1
        </Button>
      </View>
    </View>
  );
};
