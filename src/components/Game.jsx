import React from 'react';
import Button from './Button';
import Apple from './Apple';
import GameOverOverlay from './GameOverOverlay'

const buttonWidth = 120;
const canvasHeight = 1000;
const canvasWidth = 600;
const gameLength = 15;

class Game extends React.Component {
  
  intervalID = null;
  
  constructor(props){
    super(props);
    
    var apples = this.setupApples();
    
    this.state = {
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: gameLength
    }
  }
  
  componentDidMount() {
    this.intervalID = setInterval(this.updateTimer, 1000);
    console.log(this.intervalID);
  }
  
  updateTimer = () => {
    var tempSecondsRemaining = this.state.secondsRemaining;
    tempSecondsRemaining -= 1;
    
    if(!this.state.gameEnded){
      if(tempSecondsRemaining > 0){
        this.setState({
          secondsRemaining: tempSecondsRemaining,
        })
      }
      else{
        this.setState({
          gameEnded: true,
        })
        console.log(this.state.secondsRemaining + " seconds remaining");
      }
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
  
  restartGame = () => {
    console.log("restartGame pressed");
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    console.log(this.intervalID);
    
    var apples = this.setupApples();
    
    this.setState({
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: gameLength
    })
  }
  
  render(){
    return(
        <div className="game" id="game">
          <div className="game-contents">
            <div className="topbar">
              <p id="scoreCounter">{"Score: "+this.state.score}</p>
              <p id="timeCounter">{"Time: "+this.state.secondsRemaining +" seconds"}</p>
            </div>
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
              
              { this.state.gameEnded &&
                <GameOverOverlay onClick={this.restartGame}/>
              }
            </svg>
          </div>
        </div>
    );
  }
}

export default Game;