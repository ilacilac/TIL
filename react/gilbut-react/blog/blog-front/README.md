1. index / styled / template
2. component -> 공통에서 분기처리해서 보여주는거
3. action -> saga -> action 여러개 -> reducer

```jsx
createAction (type, callback) => {
  return (data) => {
    return {type, payload: callback(data)}
  }
}

dispath({
  type : type
  payload : data
});

// component dispatch({type: ‘type’, payload: ????});
// component dispatch(createAction(???));
```
