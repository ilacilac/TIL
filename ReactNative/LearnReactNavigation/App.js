import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';

// Object
/*
  {
    Navigator,
    Screen
  }
*/
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName="Home" : 초기화면 */}
      <Stack.Navigator
        initialRouteName="Home"
        // 공통 Header옵션 설정
        // screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {backgroundColor: '#29b6f6'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // options={({route}) => ({title: `상세 정보 - ${route.params.id}`})}
          options={{
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
