import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';

const App = () => {
  const today = new Date();
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
