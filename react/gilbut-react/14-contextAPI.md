## ContextAPI
global에 state들 관리하는곳과 별도로 context도 별도의 공간이 필요하기때문에 connect개념으로 연결시켜줘야한다.

## Redux vs ContextAPI
diffrent : lib vs  React
Redux : 다양한상태의 일괄관리
ContextAPI에서 다양한 상태를 관리하게 될경우, Provider을 중첩해서 사용하므로 우선순위를 지정해줘야하는 불편함 발생
```jsx
// context 초기값 제공
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={signedInUser}>
    <Layout />
  </UserContext.Provider>
</ThemeContext.Provider>

// context값을 받는 컴포넌트
<ThemeContext.Consumer>
  {theme => (
    <UserContext.Consumer>
      {user => (
        <ProfilePage user={user} theme={theme} />
      )}
    </UserContext.Consumer>
  )}
</ThemeContext.Consumer>
```

**낙관적인변경** -> Redux가 용이
(낙관적인변경은 알아두는게 좋다!)
ex) 카카오톡 메세지 보내기 실패 시,
이전상태값과 변경된 상태값을 둘다 들고 있어야 한다.

ContextAPI는 초반 세팅이 쉽고, 상태관리가 많아지면 어려워진다.
Redux는 초반 세팅이 어렵지만, 상태관리가 많아질 수록 좋다. 
그리고 에러리포트, 낙관적변경 등 상태관리 이상의 작업을 해야할 경우 Redux가 좀 더 사용하기 좋다.