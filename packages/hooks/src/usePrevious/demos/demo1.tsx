/**
 * title: 基本用法
 * desc: 记录上一次的值
 */

import { usePrevious } from 'remax-hook';
import React, { Fragment, useState } from 'react';
import { View, Text, Button } from 'remax/one';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <Fragment>
      <View className={'state_wrapper'}>
        counter current value: <Text className={'state'}>{count}</Text>
      </View>
      <View className={'state_wrapper'}>
        counter previous value: <Text className={'state'}>{previous}</Text>
      </View>

      <View className={'button_wrapper'}>
        <Button className={'button'} onTap={() => setCount((s) => s + 1)}>
          Increment
        </Button>
        <Button className={'button'} onTap={() => setCount((s) => s - 1)}>
          Decrement
        </Button>
      </View>
    </Fragment>
  );
};
