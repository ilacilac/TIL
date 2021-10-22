import React, { Component } from 'react'

export class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }
  render() {
    const scrollBoxWrap = {
      width: '500px',
      height: '350px',
      border: '1px solid #000',
      position: 'relative',
      overflowY: 'scroll'
    }
    const scrollBox = {
      width: '500px',
      height: '650px',
      position: 'relative',
      backgroundImage: 'linear-gradient(white, black)',
      overflowY: 'scroll'
    }  

    return (
      <div style={scrollBoxWrap} ref={(ref) => this.box = ref} onClick={this.scrollToBottom}>
        <div style={scrollBox} />
      </div>
    )
  }
}

export default ScrollBox

