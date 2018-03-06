import React, { Component } from 'react'

class SearchBar extends React.Component {
  constructor(props) { //how we initialze state in a class based componenet
    super(props);

    this.state = { term: '' }; /* whatever is what is first rendered */
  }

  render() {
    return (
      <div className="search-bar">
    <input
        value={this.state.term}
        onChange={event => this.onInputChange( event.target.value )} />
    </div>
  );
    //this.state
  }
  //in the construcor we said this.state = {term: ''}
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}


export default SearchBar;
