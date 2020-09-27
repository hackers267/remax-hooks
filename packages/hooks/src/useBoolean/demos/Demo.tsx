import React from 'react';
import { View, Button, Text } from 'remax/one';
import { useBoolean } from 'remax-hook';
import './index.less';

export default () => {
  const [state, { setTrue, setFalse }] = useBoolean();
  return (
    <View>
      <View className={'state_wrapper'}>
        state:<Text className={'state'}>{state ? 'true' : 'false'}</Text>
      </View>
      <View className={'button_wrapper'}>
        <Button className={'button'} onTap={() => setTrue()}>
          Show
        </Button>
        <Button className={'button'} onTap={() => setFalse()}>
          False
        </Button>
      </View>
    </View>
  );
};
