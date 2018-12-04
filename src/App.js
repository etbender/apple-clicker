import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas'

class App extends Component {
  
  componentDidMount(){
    window.onresize = () => {
      const cnv = document.getElementById('apple-clicker-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    }
    window.onresize();
  }
  
  
  render() {
    return (
      <Canvas></Canvas>
    );
  }
}

export default App;
