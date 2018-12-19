import React from 'react';
import border from '../assets/border.png'

class HowToPlayBox extends React.Component {
  render(){
    return (
        <>
          <image height="40%" width="60%" xlinkHref={border} x="135" y="450" className="border"/>
          <text fontSize="24" x="175" y="575">Press each apple at the bottom </text>
          <text fontSize="24" x="175" y="615">of the screen. You have 15</text>
          <text fontSize="24" x="175" y="655">seconds to collect as many as</text>
          <text fontSize="24" x="175" y="705">you can! Be wary of misclicking.</text>
        </>
    )
  }
}


export default HowToPlayBox;