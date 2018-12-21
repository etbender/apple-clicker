import React from 'react';
import border from '../assets/border.png'

function HowToPlayBox(props) {
  return (
    <>
      <image height="40%" width="60%" xlinkHref={border} x="140" y="550" className="border"/>
      <text fontSize="24" x="180" y="675">Press each apple at the bottom </text>
      <text fontSize="24" x="180" y="715">of the screen. You have 15</text>
      <text fontSize="24" x="180" y="755">seconds to collect as many as</text>
      <text fontSize="24" x="180" y="805">you can! Be wary of misclicking.</text>
    </>
  );
}


export default HowToPlayBox;