import React from 'react';


class Button extends React.Component {
  
  onClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.buttonNum);
  };

 
  render(){
    const {xPos, yPos, buttonWidth} = this.props;
    return(
        <rect width={buttonWidth} height={buttonWidth} stroke="black" strokeWidth="4" fill="burlywood" y={yPos} x={xPos} onTouchStart={this.onClick} onTouchEnd={e => e.preventDefault()} onClick={this.onClick}/>
    );
  }
}

export default Button;


