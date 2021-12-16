1. JS가 실행되면서 아직 불러오지 않은 컴포넌트 -> null로 렌더링 -> 페이지에서 코드 스플리팅된 컴포넌트가 사라진다? -> 로딩 이후 제대로 나타난다?
-> SSR시점 / react시점
2. (p.551) 라이브러리의 전체가 아닌, 사용중인 부분만 import한다는 의미? 
   - "서버에서는 굳이 결과물 파일 안에 리액트 라이브러리가 들어 있지 않아도 됩니다 node_modules를 통해 바로 불러와서 사용할 수 있기 때문"
   - dev-server 얘기하는 것 같음. 그때는 node_modules에서 바로바로 불러올 수 있기 때문에
   - 이렇게 설정하기 위해서는 webpack-node-externals 라이브러리를 사용해야한다.
-> 서버가 node_modules 들고있음 
-> 서버는 이미 가지고있으니깐 build 할필요없다
-> 파일 합칠때 번들안하겠다! (externals)
3. state, redux-store의 상태가 바뀐다고 리렌더링이 되지 않아, renderToString 함수를 한번 더 호출해줘야 한다. 서버에서는 라이프사이클 api사용 불가
4. react-router-dom v6에서는 useParams가 중첩 라우팅에서는 사용이 안된다
(undefined반환 / SSR시, "No routes matched location "/users/1" 이런식의 메세지 반환)
[참고1](https://github.com/remix-run/react-router/issues/7803)
[참고2](https://github.com/remix-run/react-router/issues/7960) 

(아래방법으로 될거같기도) 일단 v5로 돌려서 작업했음
[참고3](https://ui.dev/react-router-nested-routes/) 