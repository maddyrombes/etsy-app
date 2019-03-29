import React, { Component } from 'react'
import About from './About'
import { Route, Link } from "react-router-dom";

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <h2>CATEGORY</h2>
        <ul>
            <li onClick={this.props.jewelryCat}>Jewelry and Accessories</li>
            <li onClick={(e) => this.props.clothingCat(e)}>Clothing and Shoes</li>
            <li onClick={(e) => this.props.homeCat(e)}>Home and Living</li>
            <li onClick={(e) => this.props.weddingCat(e)}>Wedding and Party</li>
            <li onClick={(e) => this.props.toysCat(e)}>Toys and Entertainment</li>
            <li onClick={(e) => this.props.artCat(e)}>Art and Collectibles</li>
            <li onClick={(e) => this.props.craftCat(e)}>Craft Supplies</li>
            <li onClick={(e) => this.props.vintageCat(e)}>Vintage</li>
            <li onClick={(e) => this.props.giftsCat(e)}>Gifts</li>
        </ul>
        <div>
          <nav className="about">
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Route exact path="/about" component={About}/>
          </main>
        </div> 
      </div>
    )
  }
}
