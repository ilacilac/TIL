import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded size="large" color="blue" />}
    </SafeAreaView>
  );
};

export default App;
