# React Native

- JS와 React를 사용해 네이티브 앱을 개발할 수 있게 해주는 기술
- Android / IOS 두번 작업할 필요가 없다. → 생산성증가
- JavaScriptCore라는 자바스크립트 엔진 탑재
  → 우리가 작성하는 모든 JS 로직을 앱 내에서 실행해준다.

---

## Install

- node / JDK / watchman / android studio / Xcode / CocoaPods
- 맥OS 환경변수

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

`npx react-native init LearnReactNative c`

```bash
cd ios
pod install
```

---

## Develop Mode(MAC)

IOS : CMD + D
Android : CMD + M

---

## StyleSheet Rule

```jsx
const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    color: "white",
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "blue",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
```

- Selector 개념이 없다.
- camelCase
- display: flex(default : flexDirection : column) | none
- 숫자 단위 : dp
- background -> backgroundColor
- border -> borderWidth, borderStyle, borderColor

PPI(Pixel Per Inch) : Display
DPI(Dot Per Inch) : 인쇄물
**DP(Density-independent pixel) : 1인치당 픽셀 밀도에 따라 크기가 일관된 UI를 보여주는 단위**

- dp = px \* 160 / ppi
- px = dp \* ppi / 160
  > ex) iPhone11Pro - 200이미지 : 200 \* 458 / 160 = 572.5px

## Library

- Navigation (Stack / Tab)

  1. Library 설치

  ```bash
  yarn add @react-navigation/native react-native-screens react-native-safe-area-context # 뒤에 두개는 의존성 라이브러리
  yarn add @react-navigation/native-stack # 링크, 뒤로가기, 앞으로가기(브라우저의 History와 비슷한 사용성 제공 / 스택자료구조)
  yarn add @react-navigation/bottom-tabs
  ```

  2. NavigationContainer 컴포넌트로 감싸주기

  ```js
  import React from 'react';
  import {NavigationContainer} from '@react-navigation/native";

  function App() {
    return <NavigationContainer>{/* 네비게이션 설정 */}</NavigationContainer>
  }

  export default App;
  ```

  3. Stack Navigation 적용
     아래 Screen으로 사용된 컴포넌트는 navigation이라는 객체를 props로 받아서 다른화면으로 이동 가능
     `navigation.navigate('Detail')`

  ```js
  import React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import HomeScreen from "./screens/HomeScreen";
  import DetailScreen from "./screens/DetailScreen";

  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
  ```

  4. Tab Navigation 적용

  ```js
  import React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

  const Tab = createBottomTabNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Message" component={MessageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
  ```

- AsyncStorage

```js
import AsyncStorage from "@react-native-community/async-storage";
```

## Device test

### IOS

디바이스 리스트
`$ xcrun simctl list devices`
`$ yarn react-native run-ios --simulator="iPhone 5s"`

### Android

Android Virtual Device Manager를 열어
Create Virtual Device 버튼을 눌러 새 디바이스를 추가

## Issue

### Install

- node version 16.13.2(stable)
- ruby version 2.6.0

### IOS keyboard

- command + k

### Error : no bundle url present

- `rm -rf ios/build`

### Error: Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?

```js
// babel.config.js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-reanimated/plugin"],
};
```

`npx react-native start --reset-cache`

출처 :
https://javascript.plainenglish.io/error-reanimated-2-failed-to-create-a-worklet-maybe-you-forgot-to-add-reanimateds-babel-plugin-525c6003024c
