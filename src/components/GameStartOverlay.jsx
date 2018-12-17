import React from 'react';
import backgroundImg from '../assets/sky-background.jpg'

class GameStartOverlay extends React.Component {
  
  //<rect height="100%" stroke="black" strokeWidth="4" fill="purple" id="startGameOverlay" opacity="1" onClick={this.onClick}/>
  
  render(){
    return (
      <>
        <image height="100%" xlinkHref={backgroundImg} id="startGameOverlay" onClick={this.props.onClick}/>
        <text fontSize="32" x="150" y="500" id="gameStartText" onClick={this.props.onClick}>Press anywhere to begin!</text>
      </>
    )
  }
  
}

export default GameStartOverlay;