import React, {Component} from 'react';
import ScrollBox from './ScrollBox';
// import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <>
        {/* <ValidationSample /> */}
        <ScrollBox ref={ref => this.scrollDown = ref}/>
        <button onClick={() => {this.scrollDown.scrollToBottom()}}>아래로</button>
      </>
    );
  }
}

export default App;
