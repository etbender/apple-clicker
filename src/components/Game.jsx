//deploy: npm run deploy

import React from 'react';
import Button from './Button';
import Apple from './Apple';
import GameOverOverlay from './GameOverOverlay'
import GameStartOverlay from './GameStartOverlay'
import backgroundImg from '../assets/sky-background.jpg'
import timerImg from '../assets/timer.png'
import {CANVAS_HEIGHT, CANVAS_WIDTH, COMPETITIVE_NUMBER_OF_COLUMNS, EASY_NUMBER_OF_COLUMNS, NUMBER_OF_ROWS, GAME_LENGTH} from '../utils/constants.js'

class Game extends React.Component {
  
  intervalID = null;
  
  constructor(props){
    super(props);
    
    var apples = this.setupApples(COMPETITIVE_NUMBER_OF_COLUMNS);
    
    this.state = {
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: GAME_LENGTH,
      gameStarted: false,
      misclicked: false,
      numberOfColumns: COMPETITIVE_NUMBER_OF_COLUMNS,
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
  setupApples(numberOfColumns){
    var appleLocations = [];
    for(var i = 0; i < NUMBER_OF_ROWS; i++){
      var randomNumber = Math.floor(Math.random()*numberOfColumns);
      appleLocations.unshift(randomNumber);
    }
    return appleLocations;
  }
  
  //adds one apple to argument
  generateApple = (apples) => {
    var randomNumber = Math.floor(Math.random()*this.state.numberOfColumns);
    apples.unshift(randomNumber);
    return apples;
  }
  
  handleButtonClick = (buttonNum) =>{
    
    if(this.state.gameEnded){
      return;
    }
    
    var tempAppleLocations = this.state.appleLocations.slice();
    var tempScore = this.state.score;
    
    
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
      this.setState({
        gameEnded: true,
        misclicked: true,
      })
    }
  }
  
  resetGame = () => {
    clearInterval(this.intervalID);
    
    this.setState({
      score: 0,
      gameEnded: false,
      gameStarted: false,
      misclicked: false,
      numberOfColumns: COMPETITIVE_NUMBER_OF_COLUMNS
    })
  }
  
  
  
  startEasyGame = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    
    var apples = this.setupApples(EASY_NUMBER_OF_COLUMNS);
    
    this.setState({
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: GAME_LENGTH,
      gameStarted: true,
      misclicked: false,
      numberOfColumns: EASY_NUMBER_OF_COLUMNS
    })
  }
  
  startCompetitiveGame = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    
    var apples = this.setupApples(COMPETITIVE_NUMBER_OF_COLUMNS);
    
    this.setState({
      appleLocations: apples,
      score: 0,
      gameEnded: false,
      secondsRemaining: GAME_LENGTH,
      gameStarted: true,
      misclicked: false,
      numberOfColumns: COMPETITIVE_NUMBER_OF_COLUMNS
    })
  }
  
  renderButtons(){
    const buttons = [];
    var buttonWidth = CANVAS_WIDTH / this.state.numberOfColumns;
    for(let i = 0; i < this.state.numberOfColumns; i++){
      buttons.push(<Button yPos={CANVAS_HEIGHT - buttonWidth} xPos={i*buttonWidth} onClick={this.handleButtonClick} buttonWidth={buttonWidth} buttonNum={i} key={i}/>);
    }
    return buttons;
  }
  
  renderApples(){
    const apples = [];
    var buttonWidth = CANVAS_WIDTH / this.state.numberOfColumns;
    for(let i = 0; i < NUMBER_OF_ROWS; i++){
      apples.push(<Apple yPos={CANVAS_HEIGHT - (NUMBER_OF_ROWS - i)*buttonWidth} xPos={this.state.appleLocations[i]*buttonWidth} buttonWidth={buttonWidth} key={i}/>);
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
              {
                this.state.gameStarted &&
                this.renderButtons()
              }
              {this.renderApples()}
              <text fontSize="32" fontWeight="bold" x="30" y="35">{this.state.score}</text>
              <image xlinkHref={timerImg} height="3.5%" width="3.5%" x="560" y="5"/>
              <text fontSize="32" fontWeight="bold" x="600" y="35">{this.state.secondsRemaining}</text>
              
              { 
                this.state.gameEnded &&
                <GameOverOverlay onClick={this.resetGame} score={this.state.score} misclicked={this.state.misclicked}/>
              }
              
              {
                !this.state.gameStarted &&
                <GameStartOverlay onEasyClick={this.startEasyGame} onCompetitiveClick={this.startCompetitiveGame}/>
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