# 배열 렌더링 하기

```jsx
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'ming95',
      email: 'ming95@ming.com'
    },
    {
      id: 2,
      username: 'ompang22',
      email: 'ompang22@ompang.com'
    },
    {
      id: 3,
      username: 'test01',
      email: 'test01@gmail.com'
    }
  ];

  return (
    <div>
      {
        // key에 index넣는것은 피하도록 하자(경고는 사라지지만 성능적으로 변화된게 없다.)
        // 고유의 key값이 없으면 각 배열의 원소가 정확히 어떻게 랜더링을 해야하는지 모른다.
        // 고유값이 있고 그것을 key가 있다면 랜더링한 결과에서 정확히 어떤 객체를 가르키는지 잘 알게 된다. (효율적으로 업데이트 가능)
        // 배열을 랜더링 하게 될때는 키를 설정해야 비로소 효율적으로 렌더링 할 수 있다 고유값이 없는 경우에는 키자리에 인덱스값을 넣을 수 있긴하지만 비효율적이다 다만 데이터가 몇개 없을 경우 / 자주 없데이트 되지 않는경우에는 index를 사용해도 큰 문제가 되지는 않는다.
        users.map(
          user => (<User user={user} key={user.id} />)
        )
      }
    </div>
  )
}

export default UserList;
```

