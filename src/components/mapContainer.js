import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const API_KEY = 'd47538034411e4526726eb4345543'

class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap();//call loadMap function to load the google map
  }



  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);//finds the 'map' div in teh React dom, names it
      const mapConfig = Object.assign({}, {
        center: {lat: 37.8044, lng: 122.2711},
        zoom: 1,
        mapTypeId: 'roadmap'
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      width: '30',
      height: '40vh'
    }

    return (
      <div ref="map" style={style}>
         loading map...
      </div>
    )
  }
}


export default MapContainer;
