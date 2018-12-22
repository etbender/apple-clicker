import React from 'react';
import Button from './Button';
import Apple from './Apple';
import GameOverOverlay from './GameOverOverlay'
import GameStartOverlay from './GameStartOverlay'
import backgroundImg from '../assets/sky-background.jpg'
import timerImg from '../assets/timer.png'

const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 700;
const NUMBER_OF_ROWS = 7;
const COMPETITIVE_NUMBER_OF_COLUMNS = 5;
const EASY_NUMBER_OF_COLUMNS = 4;
const GAME_LENGTH = 15;

const INITIAL_GAME_STATE = {
  score: 0,
  gameEnded: false,
  misclicked: false,
  secondsRemaining: GAME_LENGTH
}

class Game extends React.Component {
  
  intervalID = null;
  
  constructor(props){
    super(props);
    
    const apples = this.setupApples(COMPETITIVE_NUMBER_OF_COLUMNS);
    
    this.state = {
      ...INITIAL_GAME_STATE,
      appleLocations: apples,
      gameStarted: false,
      numberOfColumns: COMPETITIVE_NUMBER_OF_COLUMNS
    }
  }
  
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
  
  
  updateTimer = () => {
    const tempSecondsRemaining = this.state.secondsRemaining -1;

    if(!this.state.gameEnded){
      this.setState({
        secondsRemaining: (tempSecondsRemaining >= 0) ? tempSecondsRemaining : 0,
        gameEnded: (tempSecondsRemaining > 0) ? this.state.gamEnded : true
      })
    }
  }
  
  
  //returns initial array of apples
  setupApples(numberOfColumns){
    const appleLocations = [];
    for(let i = 0; i < NUMBER_OF_ROWS; i++){
      const randomNumber = Math.floor(Math.random()*numberOfColumns);
      appleLocations.unshift(randomNumber);
    }
    return appleLocations;
  }
  
  //adds one apple to argument
  generateApple = (apples) => {
    const randomNumber = Math.floor(Math.random()*this.state.numberOfColumns);
    apples.unshift(randomNumber);
    return apples;
  }
  
  handleButtonClick = (buttonNum) =>{
    
    if(this.state.gameEnded){
      return;
    }
    
    let tempAppleLocations = this.state.appleLocations.slice();
    let tempScore = this.state.score;
    
    
    const appleLocation = tempAppleLocations.pop();
    
    
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
      ...INITIAL_GAME_STATE,
      gameStarted: false
    })
  }
  
  
  
  startEasyGame = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    
    const apples = this.setupApples(EASY_NUMBER_OF_COLUMNS);
    
    this.setState({
      ...INITIAL_GAME_STATE,
      appleLocations: apples,
      gameStarted: true,
      numberOfColumns: EASY_NUMBER_OF_COLUMNS
    })
  }
  
  startCompetitiveGame = () => {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.updateTimer, 1000);
    
    const apples = this.setupApples(COMPETITIVE_NUMBER_OF_COLUMNS);
    
    this.setState({
      ...INITIAL_GAME_STATE,
      appleLocations: apples,
      gameStarted: true,
      numberOfColumns: COMPETITIVE_NUMBER_OF_COLUMNS
    })
  }
  
  renderButtons(){
    const buttons = [];
    const buttonWidth = CANVAS_WIDTH / this.state.numberOfColumns;
    for(let i = 0; i < this.state.numberOfColumns; i++){
      buttons.push(<Button yPos={CANVAS_HEIGHT - buttonWidth} xPos={i*buttonWidth} onClick={this.handleButtonClick} buttonWidth={buttonWidth} buttonNum={i} key={i}/>);
    }
    return buttons;
  }
  
  renderApples(){
    const apples = [];
    const buttonWidth = CANVAS_WIDTH / this.state.numberOfColumns;
    for(let i = 0; i < NUMBER_OF_ROWS; i++){
      apples.push(<Apple yPos={CANVAS_HEIGHT - (NUMBER_OF_ROWS - i)*buttonWidth} xPos={this.state.appleLocations[i]*buttonWidth} buttonWidth={buttonWidth} key={i}/>);
    }
    return apples;
  }
  
  render(){
    const {score, secondsRemaining, gameEnded, gameStarted, misclicked} = this.state;
    return(
        <div className="game" id="game">
          <meta name="viewport" content="width=device-width,user-scalable=no"/>
          <div className="game-contents">
            <svg preserveAspectRatio="xMidYMin" id="apple-clicker-canvas" viewBox={"0 0 "+CANVAS_WIDTH+" "+CANVAS_HEIGHT}>
              
              <image height="100%" xlinkHref={backgroundImg} width={CANVAS_WIDTH}/>
              {
                gameStarted &&
                this.renderButtons()
              }
              {this.renderApples()}
              <text fontSize="32" fontWeight="bold" x="30" y="35">{score}</text>
              <image xlinkHref={timerImg} height="3.5%" width="3.5%" x="560" y="5"/>
              <text fontSize="32" fontWeight="bold" x="600" y="35">{secondsRemaining}</text>
              
              { 
                gameEnded &&
                <GameOverOverlay onClick={this.resetGame} score={score} misclicked={misclicked}/>
              }
              
              {
                !gameStarted &&
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