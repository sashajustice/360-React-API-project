import React, { Component } from 'react';


import ReactDOM from 'react-dom';//react library we use to interact w actual DOM
import MapContainer from './components/mapContainer'
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_details';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
const API_KEY = 'AIzaSyDSeJoVI2CRT0Eub--ulZcIGISbgGUmXCI';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('blockchain engineering');
  }

videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => {


    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
       <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        <h1> Google Maps API + React </h1>  'google'
        <MapContainer google={this.props.google} />

        </div>
      );
    }
}



// PART 2: Take this components generated HTML and put it on the page ( in the DOM)
//App << this is a class of the component.
 ReactDOM.render(<App />, document.querySelector('.container'));

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSeJoVI2CRT0Eub--ulZcIGISbgGUmXCI',
})(App)
