- useState를 함수형 업데이트를 하는데 왜 useCallback에 deps값을 안넣어도 되지?
    
    useState의 함수형 업데이트 → 어떻게 업데이트 할 지 정의해주는 함수
    
    - useCallback(callback, [deps]) → deps가 변경될 경우 callback 실행
    - 만약 deps가 없으면, 그 안에 있는 todos는 이전주소값에 있던 todos를 바라봄
    (ex : todo 2~5번째를 삭제하고 새로운 insert를
        
        
- 부모의  state값 변경에 의해 자식 컴포넌트가 리렌더링 될 때 React.memo로 최적화
- react-virtualized : 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게 해준다.
    
    그리고 보여줘야 할 때, 자연스럽게 렌더링 시켜준다.
    
    ex) 스크롤 되기 전에 보이지 않은 컴포넌트를 해당스크롤이 될 때 렌더링