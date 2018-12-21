import React from 'react';
import appleImg from "../assets/apple.png"

function Apple(props) {
  const {xPos, yPos, buttonWidth} = props;
  return (
    <image x={xPos} y={yPos} height={buttonWidth} width={buttonWidth} className="Apple" xlinkHref={appleImg}/>
  );
}

export default Apple;