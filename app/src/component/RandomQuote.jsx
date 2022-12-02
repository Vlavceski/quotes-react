import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const APIURL = "https://type.fit/api/quotes";
class RandomQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      text: '"Quote is loading"',
      author: "Quote"
    };
    this.handleClick = this.handleClick.bind(this);
    this.APIFetch = this.APIFetch.bind(this);
  }

  APIFetch() {
    const br = Math.floor(Math.random() * (500 - 2 + 1)) + 2;
    console.log(br);
    fetch(APIURL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          text: data[br].text,
          author: data[br].author
        })
      );
  }

  handleClick() {
    const br = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    console.log(br);
    this.setState({
      text: this.state.data[br].text,
      author: this.state.data[br].author
    });
  }
  componentDidMount() {
    this.APIFetch();
  }
  render() {
    return (
      <div className="page">
        <div id="quote-box" >
          <div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{this.state.text}</p>
                <footer class="blockquote-footer">{this.state.author}</footer>
              </blockquote>
            </div>
          </div>

          <button class='btn btn-success' id="new-quote" onClick={this.handleClick}>
            New Quote
          </button>
          <NavLink className="btn btn-info" to='/quotes'>Quotes</NavLink>
        </div>
      </div>
    );
  }
}
export default RandomQuote;