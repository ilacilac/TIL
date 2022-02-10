import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button, SafeAreaView} from 'react-native';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
        <Button
          title="Setting 열기"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Setting</Text>
        <Button title="뒤로가기" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;
