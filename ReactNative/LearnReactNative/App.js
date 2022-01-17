import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded size="large" color="blue" />
    </SafeAreaView>
  );
};

export default App;
