import React, { Component, createRef } from 'react'

export class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.boxRef.current;
    this.boxRef.current.scrollTop = scrollHeight - clientHeight;
  }
  
  boxRef = createRef();

  // ming
  state = {
    testRef: this.testRef
  }

  setStateRefTest = () => {
    console.log(this.testRef)
  }
  

  render() {

    // this.state.testRef = 'test'; // Line 23:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.setState({
    //   testRef: 'asd'
    // })
    // Cannot update during an existing state transition
    // https://joyful-development.tistory.com/6

    console.log(this.state)
    const style = {
      border: '1px solid #000',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }


    return (
      <div
        style={style}
        ref={this.boxRef}
      >
        <div style={innerStyle} onClick={this.setStateRefTest} ref={ref => this.testRef = ref}/>
      </div>
    )
  }
}

export default ScrollBox

