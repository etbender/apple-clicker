import React from 'react';
import appleImg from "../assets/apple.png"

class Apple extends React.Component {
  
  render(){
    const {xPos, yPos, buttonWidth} = this.props;
    
    return(
      <image x={xPos} y={yPos} height={buttonWidth} width={buttonWidth} className="Apple" xlinkHref={appleImg}/>
    )
  }
  
}

export default Apple;