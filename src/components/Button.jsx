import React from 'react';

class Button extends React.Component {
  
  // = () => syntax binds 'this' to the Button instance's this
  onClick = () => {
    this.props.onClick(this.props.buttonNum);
  };
 
  render(){
    const {buttonNum, xPos, yPos, onClick} = this.props;
    return(
        <rect width="120" height="120" stroke="black" strokeWidth="4" fill="burlywood" y={yPos} x={xPos} onClick={this.onClick}/>
    );
  }
}

export default Button;


