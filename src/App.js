import React, { Component } from 'react';
import Search from './components/search';
import './App.css';

function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      totalPost: '',
      term: ''
    }

  }

  searchHandler = (termValue) => {
    this.setState({ term: termValue })
  }

  componentWillMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data, totalPost: data.length }));
  }
  render() {
    return (
      <div className="app row">
        <div className="col-md-12 col sm-12">
          {this.state.totalPost} Results
          <Search onSearch={this.searchHandler} termValue={this.state.term} />
          <hr />
        </div>
        {this.state.posts.filter(searchingFor(this.state.term)).map(function (person) {
          return (
            <div className="mob-padding">
              <div key={person.id}>
                <h3>{person.title}</h3>
                <p>{person.body}</p>
                <hr />
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
