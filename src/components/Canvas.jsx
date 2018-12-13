import React from 'react';
import Button from './Button';
import Apple from './Apple';

const buttonWidth = 120;
const canvasHeight = 1000;
const canvasWidth = 600;

class Canvas extends React.Component {
  
  constructor(props){
    super(props);
    
    var apples = this.setupApples();
    
    this.state = {
      appleLocations: apples,
      score: 0,
      gameEnded: false
    }
  }
  
  
  //returns initial array of apples
  setupApples(){
    var appleLocations = [];
    for(var i = 0; i < 8; i++){
      var randomNumber = Math.floor(Math.random()*5); // random number between 0 and 4
      appleLocations.unshift(randomNumber);
    }
    return appleLocations;
  }
  
  //adds one apple to argument
  generateApple(apples){
    var randomNumber = Math.floor(Math.random()*5); // random number between 0 and 4
    apples.unshift(randomNumber);
    return apples;
  }
  
  handleButtonClick = (button_num) =>{
    
    if(this.state.gameEnded){
      return;
    }
    
    var tempAppleLocations = this.state.appleLocations.slice();
    var tempScore = this.state.score;
    var tempGameEnded = this.state.gameEnded;
    
    
    var appleLocation = tempAppleLocations.pop();
    
    
    //user pressed right button
    if(appleLocation == button_num){
      tempScore +=1;
      tempAppleLocations = this.generateApple(tempAppleLocations);
    
      this.setState({
        appleLocations: tempAppleLocations,
        score: tempScore,
      })
    }
    
    //user pressed wrong button
    else{
      tempGameEnded = true;
      this.setState({
        gameEnded: tempGameEnded
      })
    }

  }
  
  render(){
    return(
        <div className="canvas" id="canvas">
          <div className="sidebar"></div>
          <svg id="apple-clicker-canvas" viewBox="0 0 600 1000">
            
            <rect height="100%" stroke="green" strokeWidth="4" fill="grey" id="gameArea"/>
            <Button yPos={canvasHeight - buttonWidth} xPos={0} onClick={this.handleButtonClick} button_num={0}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth} onClick={this.handleButtonClick} button_num={1}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*2} onClick={this.handleButtonClick} button_num={2}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*3} onClick={this.handleButtonClick} button_num={3}/>
            <Button yPos={canvasHeight - buttonWidth} xPos={buttonWidth*4} onClick={this.handleButtonClick} button_num={4}/>
            
            <Apple yPos={canvasHeight - 7*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[0]*buttonWidth} />
            <Apple yPos={canvasHeight - 6*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[1]*buttonWidth} />
            <Apple yPos={canvasHeight - 5*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[2]*buttonWidth} />
            <Apple yPos={canvasHeight - 4*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[3]*buttonWidth} />
            <Apple yPos={canvasHeight - 3*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[4]*buttonWidth} />
            <Apple yPos={canvasHeight - 2*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[5]*buttonWidth} />
            <Apple yPos={canvasHeight - 1*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[6]*buttonWidth} />
            <Apple yPos={canvasHeight - 0*buttonWidth - 0.5*buttonWidth} xPos={0.5*buttonWidth + this.state.appleLocations[7]*buttonWidth} />
          </svg>
          <div className="sidebar">
            <p id="scoreCounter">{"Score "+this.state.score}</p> <br></br>
            { this.state.gameEnded &&
              <h1 id="messageContainer">You Lose</h1>
            }
          </div>
        </div>
    );
  }
}

export default Canvas;