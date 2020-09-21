import React from 'react';
import { View, Button } from 'remax/one';
import { useBoolean } from 'remax-hook';

export default () => {
  const [state, { setTrue, setFalse }] = useBoolean();
  return (
    <View>
      <View>state:{state ? 'true' : 'false'}</View>
      <Button onTap={() => setTrue()}>Show</Button>
      <Button onTap={() => setFalse()}>False</Button>
    </View>
  );
};
