import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>GENDER</h2>
        <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
        </ul>
        <h2>CATEGORY</h2>
        <ul>
            <li>Jewelry and Accessories</li>
            <li>Clothing and Shoes</li>
            <li>Home and Living</li>
            <li>Wedding and Party</li>
            <li>Toys and Entertainment</li>
            <li>Art and Collectibles</li>
            <li>Craft Supplies</li>
            <li>Vintage</li>
            <li>Gifts</li>
        </ul>
        <h2>PRICES</h2>
        <ul>
            <li>$25 and under</li>
            <li>$26 - $50</li>
            <li>$51 - $100</li>
            <li>$100 - $200</li>
            <li>$200 and above</li>
        </ul>
      </div>
    )
  }
}
