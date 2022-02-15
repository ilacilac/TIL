import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <Text>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;

// Animation practice
// function FadeInAndOut() {
//   const animation = useRef(new Animated.Value(1)).current;
//   const [hidden, setHidden] = useState(false);
//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: hidden ? 0 : 1,
//       useNativeDriver: true,
//     }).start();
//   }, [hidden, animation]);

//   return (
//     <View>
//       <Animated.View
//         style={[
//           styles.rectangle,
//           {
//             opacity: animation,
//           },
//         ]}
//       />
//       <Button
//         title="toggle"
//         onPress={() => {
//           setHidden(!hidden);
//         }}
//       />
//     </View>
//   );
// }

// function SlideLeftAndRight() {
//   const animation = useRef(new Animated.Value(0)).current;
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: enabled ? 150 : 1,
//       useNativeDriver: true,
//     }).start();
//   }, [enabled, animation]);

//   return (
//     <View>
//       <Animated.View
//         style={[
//           styles.rectangle,
//           {
//             transform: [{translateX: animation}],
//           },
//         ]}
//       />
//       <Button
//         title="toggle"
//         onPress={() => {
//           setEnabled(!enabled);
//         }}
//       />
//     </View>
//   );
// }

// function SlideLeftAndRight() {
//   const animation = useRef(new Animated.Value(0)).current;
//   const [enabled, setEnabled] = useState(false);

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: enabled ? 1 : 0,
//       useNativeDriver: true,
//     }).start();
//   }, [enabled, animation]);

//   return (
//     <View>
//       <Animated.View
//         style={[
//           styles.rectangle,
//           {
//             transform: [
//               {
//                 translateX: animation.interpolate({
//                   //           value
//                   inputRange: [0, 1],
//                   outputRange: [0, 150],
//                 }),
//               },
//             ],
//             opacity: animation.interpolate({
//               inputRange: [0, 1],
//               outputRange: [1, 0],
//             }),
//           },
//         ]}
//       />
//       <Button
//         title="Toggle"
//         onPress={() => {
//           setEnabled(!enabled);
//         }}
//       />
//     </View>
//   );
// }
