배열에 요소 추가할 때, 원본을 유지하기위해서 

- setUsers(users.concat(user));
- setUsers([...users, user]);



배열 요소 삭제시에는 filter함수를 사용하자

```js
const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
```



jsx에서 onClick안에 함수를 넣어줄때, 호출문을 넣으면 랜더되자마자 실행되기때문에 함수자체를 넣어줘야한다.

```jsx
function User({ user, onRemove }) {
  const { username, email, id } = { user };
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
```



배열안에 요소 업데이트 할때 map함수를 사용한다. 

```js
const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
```

