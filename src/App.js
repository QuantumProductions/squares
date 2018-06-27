import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

class App extends Component {
  componentDidMount() {
    let squares = [];
    for (let i = 0; i < 1000; i++) {
      let rx = Math.floor(Math.random() * 800);
      let ry = Math.floor(Math.random() * 800);
      let sq = {x: rx, y: ry};
      let mx = -1;
      let r = Math.floor(Math.random() * 2);
      if (r == 0) {
        mx = 1;
      }
      let my = -1;
      let r2 = Math.floor(Math.random() * 2);
      if (r2 == 0) {
        my = 1;
      }
      sq.mx = mx;
      sq.my = my;
      squares.push(sq);
    }
    this.setState({squares: squares});

    setInterval(this.heartbeat.bind(this), 10);
  }

  heartbeat() {
    for (let s of this.state.squares) {
      s.x = s.x + s.mx;
      if (s.x > 800) {
        s.x -= 800;
      } else if (s.x < 0) {
        s.x += 800;
      }
      s.y = s.y + s.my;
      if (s.y > 800) {
        s.y -= 800;
      } else if (s.y < 0) {
        s.y += 800;
      }
    }

    this.setState({squares: this.state.squares});
  }

  render() {
    let squares = this.state ? this.state.squares : null;

    if (squares && squares.length > 0) {
      squares = squares.map(s => {
        return (
          <Square d={s}/>
        );
      });

      return <div className="app" style={{backgroundColor: "black", height: "1000px"}}>
        {squares}
      </div>  
    }

    

    return <div>Foo</div>    
  }
}

export default App;
