/**
 * title: 进阶用法
 * desc: 只有 compare function 的返回值为`true`时，才记录值。这里的示例为只记录偶数。
 */
import React, { useState } from 'react';
import { Button, View, Text } from 'remax/one';
import { usePrevious } from 'remax-hook';

export default () => {
  const [count, setCount] = useState(0);
  function compare() {
    return count % 2 === 0;
  }
  const previous = usePrevious(count, compare);
  return (
    <View>
      <View className="state_wrapper">
        current state:<Text className="state">{count}</Text>
      </View>
      <View className="state_wrapper">
        previous state:<Text className="state">{previous}</Text>
      </View>
      <View className="button_wrapper">
        <Button className="button" onTap={() => setCount((s) => s + 1)}>
          Increment
        </Button>
        <Button className="button" onTap={() => setCount((s) => s - 1)}>
          Decrement
        </Button>
      </View>
    </View>
  );
};
