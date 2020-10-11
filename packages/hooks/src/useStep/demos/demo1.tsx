/**
 * title: 一般用法
 * desc: 当到达最后一个元素便停留在最后一个元素，不再向下走；在第一个元素也不向上走
 */
import { View, Button, Text } from 'remax/one';
import React from 'react';
import { useStep } from 'remax-hook';
import styles from './index.less';
import classNames from 'classnames';

const Demo1 = () => {
  const values = [1, 2, 3, 4];
  const [state, { prev, next }] = useStep(values);
  return (
    <View>
      <View className={styles.flex}>
        <View className={`state_wrapper`}>
          isStart:<Text className={`state`}>{`${state.isStart}`}</Text>
        </View>
        <View className={`state_wrapper`}>
          isEnd:<Text className={`state`}>{`${state.isEnd}`}</Text>
        </View>
      </View>

      <View className={styles.container}>
        {values.map((item) => {
          const style = classNames(`${styles.item}`, { [styles.active]: item === state.value });
          return (
            <View className={style} key={item}>
              {item}
            </View>
          );
        })}
      </View>
      <View className={`button_wrapper`}>
        <Button className={`button`} onTap={() => prev()}>
          Prev
        </Button>
        <Button className={`button`} onTap={() => next()}>
          Next
        </Button>
      </View>
    </View>
  );
};
export default Demo1;
