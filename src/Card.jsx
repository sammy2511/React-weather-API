import React, { Component } from 'react';
import './card.css';

class Card extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div >
      <div className="card">

        <h2>Day</h2>
        <h3>Cloudy<span>Wind 10km/h <span className="dot">•</span> Precip 0%</span></h3>
        <h1>23°</h1>
        <div className="sky">
            <div className="sun"></div>
            <div className="cloud">
                <div className="circle-small"></div>
                <div className="circle-tall"></div>
                <div className="circle-medium"></div>
            </div>
        </div>
      <h3>City,Country</h3>
    </div>
    </div>
    )
  }
}

export default Card;
