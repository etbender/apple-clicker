import React from 'react';
import {BUTTON_WIDTH} from '../utils/constants.js'

class Button extends React.Component {
  
  onClick = (e) => {
    e.preventDefault();
    console.log(e.nativeEvent.type);
    this.props.onClick(this.props.buttonNum);
  };

 
  render(){
    const {xPos, yPos} = this.props;
    return(
        <rect width={BUTTON_WIDTH} height={BUTTON_WIDTH} stroke="black" strokeWidth="4" fill="burlywood" y={yPos} x={xPos} onTouchStart={this.onClick} onTouchEnd={e => e.preventDefault()} onClick={this.onClick}/>
    );
  }
}

export default Button;


