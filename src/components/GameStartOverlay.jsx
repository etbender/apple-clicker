import React from 'react';
import backgroundImg from '../assets/sky-background.jpg'
import howToPlayButton from '../assets/button_how-to-play.png'
import HowToPlayBox from './HowToPlayBox'

class GameStartOverlay extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      howToPlayOpen: false
    }
  }
  
  toggleHowToPlay = () => {
    const newVal = !this.state.howToPlayOpen;
    this.setState({
      howToPlayOpen: newVal
    });
  }
  
  render(){
    return (
      <>
        <image height="100%" width="100%" xlinkHref={backgroundImg} id="startGameOverlay" onClick={this.props.onClick}/>
        <text fontSize="32" x="175" y="400" id="gameStartText" onClick={this.props.onClick}>Press anywhere to begin!</text>
        <image height="5%" width="19%" x="280" y="450" xlinkHref={howToPlayButton} onClick={this.toggleHowToPlay}/>
        {
          this.state.howToPlayOpen &&
          <HowToPlayBox/>
        }
      </>
    )
  }
  
}

export default GameStartOverlay;