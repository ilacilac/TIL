import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        // sizes[size],
        styles.boxSize[size],
        {
          backgroundColor: color,
        },
      ]} // styles[props.size] 로 왜 안하고 따로 빼서 작업했을까? -> 가독성? / boxSize처럼 해줘도 되지않을까?
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  // small: {
  //   width: 32,
  //   height: 32,
  // },
  // medium: {
  //   width: 64,
  //   height: 64,
  // },
  // large: {
  //   width: 128,
  //   height: 128,
  // },
  // ming
  boxSize: {
    small: {
      width: 32,
      height: 32,
    },
    medium: {
      width: 64,
      height: 64,
    },
    large: {
      width: 128,
      height: 128,
    },
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
