import React, { Component } from 'react';
import ReactDOM from 'react-dom';//react library we use to interact w actual DOM
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import MeetUp from 'meetup-api';
import { GoogleApiWrapper } from 'google-maps-react'

import MapContainer from './components/mapContainer'
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_details';
import SearchBar from './components/search_bar';
import './App.css';

const API_KEY = 'AIzaSyDSeJoVI2CRT0Eub--ulZcIGISbgGUmXCI';
const meetup = MeetUp({ key: 'd47538034411e4526726eb4345543' });

console.log('BLOB', meetup, meetup.getStreamOpenEvents)

meetup.getStreamOpenEvents({ topic: 'blockchain' }, function(err, response) {
  if (err) return console.error('ERROR :: =>', err)

  console.log('RESPONSE :: ==>', response)
})

console.log('finished')

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
        <h3> 'Where would you like to meet?' </h3>
        <MapContainer google={this.props.google} />

        </div>
      )};
}



// PART 2: Take this components generated HTML and put it on the page ( in the DOM)
//App << this is a class of the component.
 // ReactDOM.render(<App />, document.querySelector('.container'));

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAMlPoVlRO7ISbslg6xQEcqkyv3d2Pwg7A',
})(App)
//
// export default MeetUp(
//   apiKey: 'd47538034411e4526726eb4345543',
//
// )(App)
