import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
});

function Box() {
  return <View style={styles.box} />;
}

export default Box;
