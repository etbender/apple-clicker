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
        <image height="10%" width="50%" x="175" y="250" xlinkHref={playEasyButton} onClick={this.props.onEasyClick}/>
        <image height="10%" width="50%" x="175" y="350" xlinkHref={playCompetitiveButton} onClick={this.props.onCompetitiveClick}/>
        <image height="10%" width="50%" x="175" y="450" xlinkHref={howToPlayButton} onClick={this.toggleHowToPlay}/>
        {
          this.state.howToPlayOpen &&
          <HowToPlayBox/>
        }
      </>
    )
  }
  
}

export default GameStartOverlay;