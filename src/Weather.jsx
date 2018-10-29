import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

class Weather extends Component{
  constructor(props){
    super(props);

    this.state = {
      city:''
    }
  }

  componentWillReceiveProps(nextProps){
    this.forceUpdate();
  }

  render(){
    const {city} = this.props;
    console.log(city);
    return(
      <div className='container' style = {{ width: '800px',padding:'10px',float:'left'}}>

      <ReactWeather
        forecast="5days"
        apikey="ec7ec46e7edb4f38b7c163312182810"
        type="city"
        city={city}/>
      </div>
    )
  }

}

export default Weather;
