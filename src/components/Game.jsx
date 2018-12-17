//deploy: npm run deploy

import React from 'react';
import Button from './Button';
import Apple from './Apple';
import GameOverOverlay from './GameOverOverlay'
import GameStartOverlay from './GameStartOverlay'
import backgroundImg from '../assets/sky-background.jpg'
import timerImg from '../assets/timer.png'
import {CANVAS_HEIGHT, CANVAS_WIDTH, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, BUTTON_WIDTH, GAME_LENGTH} from '../utils/constants.js'

class Game extends React.Component {
  
  intervalID = null;
  
  constructor(props){
    super(props);
    
    var apples = this.setupApples();
    
    this.state = {
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: GAME_LENGTH,
      gameStarted: false,
    }
  }
  
  componentWillUnmount(){
    clearInterval(this.intervalID);
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
          secondsRemaining: tempSecondsRemaining
        })
        console.log(this.state.secondsRemaining + " seconds remaining");
      }
    }
  }
  
  
  //returns initial array of apples
  setupApples(){
    var appleLocations = [];
    for(var i = 0; i < NUMBER_OF_ROWS; i++){
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
  
  handleButtonClick = (buttonNum) =>{
    
    if(this.state.gameEnded){
      return;
    }
    
    var tempAppleLocations = this.state.appleLocations.slice();
    var tempScore = this.state.score;
    var tempGameEnded = this.state.gameEnded;
    
    
    var appleLocation = tempAppleLocations.pop();
    
    
    //user pressed right button
    if(appleLocation === buttonNum){
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
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    
    var apples = this.setupApples();
    
    this.setState({
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: GAME_LENGTH,
      gameStarted: true,
    })
  }
  
  renderButtons(){
    const buttons = [];
    for(let i = 0; i < NUMBER_OF_COLUMNS; i++){
      buttons.push(<Button yPos={CANVAS_HEIGHT - BUTTON_WIDTH} xPos={i*BUTTON_WIDTH} onClick={this.handleButtonClick} buttonNum={i} key={i}/>);
    }
    return buttons;
  }
  
  renderApples(){
    const apples = [];
    for(let i = 0; i < NUMBER_OF_ROWS; i++){
      apples.push(<Apple yPos={CANVAS_HEIGHT - (NUMBER_OF_ROWS - i)*BUTTON_WIDTH} xPos={this.state.appleLocations[i]*BUTTON_WIDTH} key={i}/>);
    }
    return apples;
  }
  
  render(){
    //const {score, secondsRemaining, appleLocations, gameEnded, gameStarted} = this.state;
    return(
        <div className="game" id="game">
          <meta name="viewport" content="width=device-width,user-scalable=no"/>
          <div className="game-contents">
            <svg id="apple-clicker-canvas" viewBox={"0 0 "+CANVAS_WIDTH+" "+CANVAS_HEIGHT}>
              
              <image height="100%" xlinkHref={backgroundImg} width={CANVAS_WIDTH}/>
              {this.renderButtons()}
              {this.renderApples()}
              <text fontSize="32" fontWeight="bold" x="30" y="35">{this.state.score}</text>
              <image xlinkHref={timerImg} height="3.5%" width="3.5%" x="560" y="5"/>
              <text fontSize="32" fontWeight="bold" x="600" y="35">{this.state.secondsRemaining}</text>
              
              { 
                this.state.gameEnded &&
                <GameOverOverlay onClick={this.restartGame} score={this.state.score}/>
              }
              
              {
                !this.state.gameStarted &&
                <GameStartOverlay onClick={this.restartGame}/>
              }
              
            </svg>
            <div className="bottombar">
            </div>
          </div>
        </div>
    );
  }
}

export default Game;