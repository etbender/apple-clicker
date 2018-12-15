import React from 'react';
import appleImg from "../assets/apple.png"

class Apple extends React.Component {
  
  //<circle cx={xPos} cy={yPos} r="60" stroke="black" strokeWidth="3" fill="crimson" className="Apple"/>
  
  render(){
    const {xPos, yPos} = this.props;
    
    return(
      <image x={xPos} y={yPos} height="120" width="120" className="Apple" xlinkHref={appleImg}/>
    )
  }
  
}

export default Apple;