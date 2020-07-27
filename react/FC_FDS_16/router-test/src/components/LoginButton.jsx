import React from "react";
import { withRouter } from "react-router-dom";

function Loginbutton({ history }) {
  return <button onClick={click}>로그인</button>;

  function click() {
    setTimeout(() => {
      // 이동
      console.log("이동");
      history.push("/");
    }, 1000);
  }
}

export default withRouter(Loginbutton);
