import React, { Component } from 'react';

class Square extends Component {
  render() {
    return <div style={{position: 'absolute', top: this.props.d.y, left: this.props.d.x, width: "15px", height: "15px", backgroundColor: "#BBCCDD", color: "red"}}>
    *
    </div>

  }
}

export default Square;