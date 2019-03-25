import React, { Component } from 'react';
import './App.css';
// import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getListings = this.getListings.bind(this)
    this.displayListings = this.displayListings.bind(this)
  }

  componentDidMount() {
    this.getListings()
  }

  getListings() {
    let api = 'https://openapi.etsy.com/v2/listings/active?api_key=xvfwflurl2nkaogrgw3w7263&limit=500'
    fetch(api, {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(e => console.log(e))
    // .then(this.displayListings())
  }

  // .then((response) => response.length ? console.log('string') : console.log('empty'))


  displayListings() {
    // console.log(this.state.data)
    // return this.state.data.map(listing => {
    //   return <li>{listing.title}</li>})
  }

  render() {
    return (
      <div>
        <ul>
          {this.displayListings()}
        </ul>
      </div>
    );
  }
}

export default App;