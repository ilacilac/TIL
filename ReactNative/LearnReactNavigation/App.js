import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

// function HomeScreen({navigation}) {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Home</Text>
//         <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
//         <Button
//           title="Setting 열기"
//           onPress={() => navigation.navigate('Setting')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// function SettingScreen({navigation}) {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Setting</Text>
//         <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//       </View>
//     </SafeAreaView>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/*
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        // drawerContent={({navigation}) => (
        //   <SafeAreaView>
        //     <Text>A Custom Drawer</Text>
        //     <Button
        //       onPress={() => navigation.closeDrawer()}
        //       title="Drawer 닫기"
        //     />
        //   </SafeAreaView>
        // )}
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#2b2b2b',
          },
          // overlayColor: 'transparent',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
        />

        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator>
       */}
    </NavigationContainer>
  );
}

export default App;
