import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
// import { Route, Link } from "react-router-dom";

const key = process.env.REACT_APP_API_KEY 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      keyword: 'craft',
      category: '',
      price: '',
    }
    this.getListings = this.getListings.bind(this)
    this.displayListings = this.displayListings.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.flipListing = this.flipListing.bind(this)
  }

  componentDidMount() {
    this.getListings()
  }

  getListings() {
    fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=${key}&limit=50&includes=MainImage&keywords=${this.state.keyword}&findAllTopCategory`)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        data: data.results
      })
    })
    .then(this.displayListings())
  }

  flipListing(e) {
    e.target.style.opacity = '0.2'
  }

  flipBack(e) {
    e.target.style.opacity = '1'
  }

  displayListings() {
    return this.state.data.map(listing => {
      return <img 
        style={{opacity: this.state.opacity}} 
        onClick={(e) => this.flipListing(e)} 
        key={listing.listing_id} 
        alt="listing" 
        src={listing.MainImage.url_fullxfull} 
      />
    })
  }

  handleSearch(e) {
    e.preventDefault() 
    this.setState({
      keyword: e.target.value
    })
  }

  handleButtonClick(e) {
    e.preventDefault()
    this.getListings()
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} handleButtonClick={this.handleButtonClick} getListings={this.getListings} />
        <Sidebar />
        <Main displayListings={this.displayListings} />
      </div>
    );
  }
}

export default App;