# React Router

```jsx
<Route path="/detail" component={DetailPage} />
```

react-router을 사용하여 path경로에 따라 컴포넌트를 뿌려줄 때,
위와 같이 뿌려준다.
그럼 위의 컴포넌트를 뿌려주면서 props를 전달할 때는 어떻게 전달해줄까? 

 

```jsx
<Route path="/detail" component={DetailPage} videos={videos} />
```

위와 같이 작성해주었더니 동작하지 않았다. 
내가 넣어주고싶은 videos props가 무시된다.



```jsx
<Route path="/detail" component={(props) => <DetailPage {...props} videos={videos} />} />
```

위와같이 작성하면 videos값이 들어가긴 하지만, component props에 function 형태로 전달하면 렌더링 할 때마다 새로운 컴포넌트를 생성하기 때문에 성능측면에서 좋지 않다.
(위에 {...props}를 사용한 이유는 DetailPage에서 location 객체를 이용할거기 때문이다)



```jsx
 <Route
        path="/detail"
        render={(props) => <DetailPage {...props} videos={videos} />}
      />
```

이때 render props를 사용하면 불필요하게 마운트되지 않는다.

