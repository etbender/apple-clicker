import React from 'react';

class Button extends React.Component {
  
  // = () => syntax binds 'this' to the Button instance's this
  onClick = () => {
    this.props.onClick(this.props.id);
  };
 
  render(){
    const {id, xPos, yPos, onClick} = this.props;
    var browserHeight = window.innerHeight;
    return(
        <rect width="120" height="120" stroke="blue" stroke-width="4" fill="green" y={yPos} x={xPos} onClick={this.onClick}
        id={id}/>
    );
  }
}

export default Button;


