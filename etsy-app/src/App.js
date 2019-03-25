import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
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
    const key = ""
    fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=${key}&limit=500&includes=MainImage`)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        data: data.results
      })
    })
    .then(this.displayListings())
  }

  displayListings() {
    return this.state.data.map(listing => {
      return <img src={listing.MainImage.url_fullxfull} />
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        {this.displayListings()}
      </div>
    );
  }
}

export default App;