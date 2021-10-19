import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    // this : EventPractice
    // 호출부에 따라 결정되므로 메서드를 this와 바인딩 작업을 해줘야 한다.
    // 바인딩 안할경우 -> undefined ??
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          // 이벤트에는 실행할 자바스크립트코드를 전달하는게 아닌, 함수 형태의 값을 전달한다.
          // !! 화살표 함수는 외부스코프의 this를 자동으로 binding 하기때문에 화살표함수로 작성한 이벤트핸들러에서 this를 사용해 접근이 가능하다.
          // !! render 메서드 안에서 화살표 함수를 사용하면 컴포넌트가 렌더링할 때마다 새로운 함수를 만들기 때문에 엄격한 비교에 의해 최적화가 깨질 수 있다
          // onChange={(e) => {
          //   console.log(e.target.value); // SyntheticEvent -> 웹 브라우저의 네이티브 이벤트를 감싸는 객체, 네이티브 이벤트와 차이점 : 이벤트가 끝나면 초기화되어 정보를 참조할 수 없음
          //   this.setState({
          //     message: e.target.value,
          //   });
          // }}
          onChange={this.handleChange}
        />
        <button
          // onClick={() => {
          //   alert(this.state.message);
          //   this.setState({
          //     message: "",
          //   });
          // }}
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;

// Reference
// https://ko.reactjs.org/docs/handling-events.html
// https://ko.reactjs.org/docs/faq-functions.html
// https://velog.io/@dolarge/React-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
