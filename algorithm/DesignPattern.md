MVC

- Model / View / Controller
- Controller : view를 1:n관계로 관리 및 input에 의한 model 업데이트
- Model과 View 사이에 의존성 발생하여 규모가 커지고 복잡해질 수록 유지보수가 어렵다

MVP

- MVC에서 파생. Model과 View간의 의존성이 없음
- Presenter은 입력에 해댱하는 Model 업데이트
- Presenter은 View를 참조(1:1 관계)하고있기때문에 의존성이 커짐

MVVM

- MVC에서 파생. Model과 View, Controller View의 의존성 고려하여 각 구성요소가 독립적으로 작성
- 모든 Input -> View로 전달
- ViewModel은 View를 참조하지 않음(1:n)
- View는 자신이 이용할 ViewModel을 선택해 바인딩하여 업데이트
- Command 패턴 / Data binding
