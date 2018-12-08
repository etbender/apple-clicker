import React from 'react';
import Button from './Button';
import Apple from './Apple';

const buttonWidth = 120;
const canvasHeight = 1000;
const canvasWidth = 600;

class Canvas extends React.Component {
  
  
  constructor(props){
    super(props);
    
    this.state = {
      appleLocations: [],
      score: 0
    }

    for(var i = 0; i < 7; i++){
      this.generateApple();
    }
  }
  
  generateApple(){
    var randomNumber = Math.floor(Math.random()*5); // random number between 0 and 4
    this.state.appleLocations.unshift(randomNumber);
  }
  
  handleButtonClick = (button_num) =>{
    console.log("Click Handled from "+button_num);
    var tempAppleLocations = this.state.appleLocations;
    var appleLocation = tempAppleLocations.pop();
   
    
    this.setState({
      appleLocations: tempAppleLocations
    })
    
    var temp = this;
  }
  
  render(){
    this.generateApple();
    return(
        <div className="canvas">
          <svg id="apple-clicker-canvas" viewBox="0 0 600 1000">
            <rect height="100%" stroke="green" strokeWidth="4" fill="grey" />
            <Button yPos={canvasHeight - buttonWidth} xPos={0} onClick={this.handleButtonClick} button_num={1}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth} onClick={this.handleButtonClick} button_num={2}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*2} onClick={this.handleButtonClick} button_num={3}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*3} onClick={this.handleButtonClick} button_num={4}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*4} onClick={this.handleButtonClick} button_num={5}/>
            
            <Apple yPos={canvasHeight - 7*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[0]*buttonWidth} />
            <Apple yPos={canvasHeight - 6*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[1]*buttonWidth} />
            <Apple yPos={canvasHeight - 5*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[2]*buttonWidth} />
            <Apple yPos={canvasHeight - 4*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[3]*buttonWidth} />
            <Apple yPos={canvasHeight - 3*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[4]*buttonWidth} />
            <Apple yPos={canvasHeight - 2*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[5]*buttonWidth} />
            <Apple yPos={canvasHeight - 1*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[6]*buttonWidth} />
            <Apple yPos={canvasHeight - 0*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[7]*buttonWidth} />
          </svg>
          <p id="scoreCounter">{this.state.score}</p>
        </div>
    );
  }
}

export default Canvas;