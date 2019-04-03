import React, { Component } from 'react';
import '../App.css'
class Search extends Component {

    handSearchChange = (e) => {
        this.props.onSearch(e.target.value);            
    }

  render() {
    return (
        <form>
        <input className="searchBar"type="text" 
        value={this.props.termValue}
        onChange={this.handSearchChange}/>
      </form>
    )
  }
}
export default Search
