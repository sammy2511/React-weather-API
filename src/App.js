import React, { Component } from 'react';
import './card.css'
import Weather from './Weather'
import Map from './Map'


class App extends Component {
    constructor(props){
      super(props);

      this.state = {
       city:'',
       error:{
         message:''
       },
       lat: null,
       lng: null
     }
    }

    serach(){
      const apiKey = 'ec7ec46e7edb4f38b7c163312182810';
      const baseUri = `https://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${this.state.city}`;
      //REST Call
      fetch(baseUri)
      .then(response => response.json())
      .then(json =>{
      this.setState({
        lat:json.location.lat,
        lng:json.location.lon
      })
   })
}



  render() {
    return (
      <div className="form-inline" style = {{ height: '100vh', width: '100%' }}>
        <h2>Weather</h2>
        <div className="form-group">
        <input
          className="form-control"
          type = "text"
          placeholder="City"
          style = {{marginRight:'5px'}}
          onChange = {event => this.setState({city:event.target.value})}
        />

        <button
          className="btn btn-primary"
          type="button"
          onClick = {() => this.serach()}
          >
            Search
          </button>
        {
          this.state.lat === null ?  <div></div>:<div>
           <Map
            lat = {this.state.lat}
            lng = {this.state.lng}
           ></Map>
           <Weather
           city = {this.state.city}
           ></Weather>
          </div>
        }
        </div>
       </div>
    );
  }
}

export default App;
