import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>MessageScreen</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
