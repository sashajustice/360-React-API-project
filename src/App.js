import React, { Component } from 'react';
import ReactDOM from 'react-dom';//react library we use to interact w actual DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import './App.css';


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

    </div>
  )};
  }


 ReactDOM.render(<App />, document.querySelector('.container'));
