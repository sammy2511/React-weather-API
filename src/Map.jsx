import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component{
  constructor(props){
    super(props);

    this.state = {
     city:'',
     center: {
       lat: null,
       lng: null
     },
     zoom: 11
   }
  }

  updateState(lat,lng){
    this.setState({lat,lng});
  }

  render(){
    const {city,lat,lng} = this.props;
    return(
      lat !== null?
      <div>
        {
        <div  className=' container w-100 p-3' style = {{ height: '500px', width: '1500px', float:'left',padding:'10px',border:'2px solid black'}}>
          <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC1JwxRlBJODtHxQp3eo87tKap9mUGJaa8' }}
          center={[lat,lng]}
          zoom={this.state.zoom}
          />
          </div>
      }
      </div>:<div></div>
    )
  }
}

export default Map;
