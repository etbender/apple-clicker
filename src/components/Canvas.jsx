import React from 'react';
import Button from './Button';
const buttonWidth = 120;

class Canvas extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  handleButtonClick(e){
    console.log("Click Handled");
    console.log(e);
  }
  
  render(){
    var browserHeight = window.innerHeight;
    return(
        <div>
          <svg id="apple-clicker-canvas" viewBox="0 0 600 1000">
            <rect height="100%" stroke="green" stroke-width="4" fill="grey" />
            <Button yPos={880} xPos={0} onClick={this.handleButtonClick} id="button1"/>
            <Button yPos={880} xPos={buttonWidth} onClick={this.handleButtonClick} id="button2"/>
            <Button yPos={880} xPos={buttonWidth*2} onClick={this.handleButtonClick} id="button3"/>
            <Button yPos={880} xPos={buttonWidth*3} onClick={this.handleButtonClick} id="button4"/>
            <Button yPos={880} xPos={buttonWidth*4} onClick={this.handleButtonClick} id="button5"/>
          </svg>
        </div>
    );
  }
}

export default Canvas;