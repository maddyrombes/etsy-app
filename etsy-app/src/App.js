import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import { Route, Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      keyword: 'the'
    }
    this.getListings = this.getListings.bind(this)
    this.displayListings = this.displayListings.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.getListings()
  }

  getListings() {
    fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=${key}&limit=500&includes=MainImage&keywords=${this.state.keyword}`)
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
      return <img key={listing.listing_id} alt="listing" src={listing.MainImage.url_fullxfull} />
    })
  }

  handleInput(e) {
    e.preventDefault() 
    this.setState({
      keyword: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    this.getListings()
  }

  render() {
    return (
      <div>
        <Header handleInput={this.handleInput} handleClick={this.handleClick} getListings={this.getListings} />
        <Sidebar />
        <div className="images">
          {this.displayListings()}
        </div>
      </div>
    );
  }
}

export default App;