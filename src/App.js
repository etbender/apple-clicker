import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'

class App extends Component {
  
  componentDidMount(){
    /*
    window.onresize = () => {
      const cnv = document.getElementById('apple-clicker-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    }
    window.onresize();
    */
  }
  
  
  render() {
    return (
      <Game />
    );
  }
}

export default App;
