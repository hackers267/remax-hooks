import React from 'react';
import { View, Button, Text } from 'remax/one';
import { useToggle } from 'remax-hook';
import './index.less';

export default () => {
  const [state, { setDefault, setReverse, toggle }] = useToggle('foo', 'bar');
  return (
    <View>
      <View className={'state_wrapper'}>
        state:<Text className={`state`}>{`${state}`}</Text>
      </View>
      <View className={'button_wrapper'}>
        <Button className={'button'} onTap={() => toggle()}>
          Toggle
        </Button>
        <Button className={'button'} onTap={() => toggle('bar')}>
          ToggleBar
        </Button>
        <Button className={'button'} onTap={() => toggle('foo')}>
          ToggleFoo
        </Button>
        <Button className={'button'} onTap={() => setDefault()}>
          setFoo
        </Button>
        <Button className={'button'} onTap={() => setReverse()}>
          setBar
        </Button>
      </View>
    </View>
  );
};
