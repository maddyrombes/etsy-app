import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Loading from "./components/Loading"
import Copyright from "./components/Copyright"

const key = process.env.REACT_APP_API_KEY 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      keyword: 'craft',
      category: ', modern',
      price: '',
      isFlipped: false,
      offset: 0,
    }
    this.getListings = this.getListings.bind(this)
    this.displayListings = this.displayListings.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.flipListing = this.flipListing.bind(this)
    this.flipBack = this.flipBack.bind(this)
    this.jewelryCat = this.jewelryCat.bind(this)
    this.clothingCat = this.clothingCat.bind(this)
    this.homeCat = this.homeCat.bind(this)
    this.weddingCat = this.weddingCat.bind(this)
    this.toysCat = this.toysCat.bind(this)
    this.artCat = this.artCat.bind(this)
    this.craftCat = this.craftCat.bind(this)
    this.vintageCat = this.vintageCat.bind(this)
    this.giftsCat = this.giftsCat.bind(this)
    this.handleNextButton = this.handleNextButton.bind(this)
  }

  componentDidMount() {
    this.getListings()
  }

  getListings() {
    fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=${key}&limit=60&offset=${this.state.offset}&includes=MainImage&keywords=${this.state.keyword}${this.state.category}`)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        data: data.results
      })
    })
    .then(this.displayListings())
  }

  displayListings() {
    return (
      <div className='container'>
        {this.state.data.map(listing => {
        return (
          <div 
            className='overlay-container'             
            key={listing.listing_id} 
            onClick={(e) => { this.state.isFlipped === false ?
                this.flipListing(e) :
                this.flipBack(e)
              }}
          >
            <img 
              className="image"
              alt="listing" 
              src={listing.MainImage.url_fullxfull} 
            />
            <div className="toggle-text">
              <p className="title-text">{listing.title}</p>
              <p className="price-text">{listing.price} {listing.currency_code}</p>
              <a onClick={(e) => this.stopProp(e)} className="url-text" target="blank" href={listing.url}>Buy it on Etsy</a>
            </div>
          </div>
        )})}
      </div>
  )}

  stopProp(e) {
    e.stopPropagation()
  }

  flipListing(e) {
    this.setState({ isFlipped: true }) 
    e.target.style.opacity = '0.2'
    e.target.nextSibling.id = "toggle-text-show"  
  }

  flipBack(e) {
    this.setState({ isFlipped: false }) 
    e.target.style.opacity = '1'
    e.target.nextSibling.id = "toggle-text-hide"
  }

  handleSearch(e) {
    e.preventDefault() 
    this.setState({ keyword: e.target.value })
  }

  handleButtonClick(e) {
    e.preventDefault()
    this.getListings()
  }

  async jewelryCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", jewelry, accessories" })
    this.getListings()
  }

  async clothingCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", clothing, shoes" })
    this.getListings()
  }

  async homeCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", home, living" })
    this.getListings()
  }

  async weddingCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", wedding, party" })
    this.getListings()
  }

  async toysCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", toys, entertainment" })
    this.getListings()
  }

  async artCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", art, collectibles" })
    this.getListings()
  }

  async craftCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", craft" })
    this.getListings()
  }

  async vintageCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", vintage" })
    this.getListings()
  }

  async giftsCat(e) {
    e.target.style.fontWeight = 'bold'
    await this.setState({ category: ", gifts" })
    this.getListings()
  }

  handleNextButton(e) {
    e.preventDefault()
    this.setState({
      offset: this.state.offset + 50
    })
    this.getListings()
    this.displayListings()
  }

  render() {
    return (
      <div>
          <Header 
            handleSearch={this.handleSearch} handleButtonClick={this.handleButtonClick} getListings={this.getListings} 
          />
          <Sidebar 
            jewelryCat={this.jewelryCat}
            clothingCat={this.clothingCat}
            homeCat={this.homeCat}
            weddingCat={this.weddingCat}
            toysCat={this.toysCat}
            artCat={this.artCat}
            craftCat={this.craftCat}
            vintageCat={this.vintageCat}
            giftsCat={this.giftsCat}
          />
          <Copyright />
          <Main 
            displayListings={this.displayListings}
            handleNextButton={this.handleNextButton}
          />
          <Loading />
      </div>
    );
  }
}

export default App;