import React from 'react';

class Button extends React.Component {
  
  // = () => syntax binds 'this' to the Button instance's this
  onClick = () => {
    this.props.onClick(this.props.button_num);
  };
 
  render(){
    const {button_num, xPos, yPos, onClick} = this.props;
    var browserHeight = window.innerHeight;
    return(
        <rect width="120" height="120" stroke="blue" strokeWidth="4" fill="green" y={yPos} x={xPos} onClick={this.onClick}
        button_num={button_num}/>
    );
  }
}

export default Button;


