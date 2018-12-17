import React from 'react';
import appleImg from "../assets/apple.png"
import {BUTTON_WIDTH} from '../utils/constants.js'

class Apple extends React.Component {
  
  //<circle cx={xPos} cy={yPos} r="60" stroke="black" strokeWidth="3" fill="crimson" className="Apple"/>
  
  render(){
    const {xPos, yPos} = this.props;
    
    return(
      <image x={xPos} y={yPos} height={BUTTON_WIDTH} width={BUTTON_WIDTH} className="Apple" xlinkHref={appleImg}/>
    )
  }
  
}

export default Apple;