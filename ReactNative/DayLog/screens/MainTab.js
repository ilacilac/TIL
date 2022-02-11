import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import CalendarScreen from './CalendarScreen';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
