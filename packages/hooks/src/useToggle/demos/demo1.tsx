import React from 'react';
import { View, Button, Text } from 'remax/one';
import { useToggle } from 'remax-hook';
import './index.less';

export default () => {
  const [state, { setDefault, setReverse, toggle }] = useToggle();
  return (
    <View>
      <View className={'state_wrapper'}>
        state:<Text className={`state`}>{`${state}`}</Text>
      </View>
      <View className={'button_wrapper'}>
        <Button className={'button'} onTap={() => toggle()}>
          Toggle
        </Button>
        <Button className={'button'} onTap={() => setDefault()}>
          setDefault
        </Button>
        <Button className={'button'} onTap={() => setReverse()}>
          setReverse
        </Button>
      </View>
    </View>
  );
};
