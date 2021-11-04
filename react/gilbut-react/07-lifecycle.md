## 궁금증

- render 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 하면 안되고 
DOM에 접근해서도 안된다.
→ DOM정보를 가져오거나 state를 변화를 줄때는 componentDidMount 처리 해야한다.
    
    → **내생각** : 랜더할때마다 setState를 하므로, 계속 상태를 업데이트 해주니깐 무한으로 렌더되기때문? 
    → yes! 
    → setState할때마다 기존 state와 새 state는 주소값이 다름
    
- `static getDerivedStateFromProps` 다른 라이프사이클 메서드와 다르게 static을 사용한 이유
→ 렌더링 단계에서 side-effects 방지
  ex) 인스턴스에서 props를 업데이트하거나 사용하는 경우