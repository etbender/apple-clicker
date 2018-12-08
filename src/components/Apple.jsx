import React from 'react';

class Apple extends React.Component {
  
  render(){
    const {xPos, yPos} = this.props;
    
    return(
      <circle cx={xPos} cy={yPos} r="60" stroke="black" strokeWidth="3" fill="red" className="Apple"/>
    )
  }
  
}

export default Apple;