import React from 'react';
import HowToPlayBox from './HowToPlayBox'
import backgroundImg from '../assets/sky-background.jpg'
import howToPlayButton from '../assets/button_how-to-play.png'
import playCompetitiveButton from '../assets/button_play-competitive.png'
import playEasyButton from '../assets/button_play-easy.png'

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
        <image height="100%" width="100%" xlinkHref={backgroundImg}/>
        <image height="7%" width="47%" x="185" y="300" xlinkHref={playEasyButton} onClick={this.props.onEasyClick}/>
        <image height="7%" width="47%" x="185" y="360" xlinkHref={playCompetitiveButton} onClick={this.props.onCompetitiveClick}/>
        <image height="7%" width="47%" x="185" y="420" xlinkHref={howToPlayButton} onClick={this.toggleHowToPlay}/>
        {
          this.state.howToPlayOpen &&
          <HowToPlayBox/>
        }
      </>
    )
  }
  
}

export default GameStartOverlay;