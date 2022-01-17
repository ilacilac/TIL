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

## Install Issue

- node version 16.13.2(stable)
- ruby version 2.6.0
