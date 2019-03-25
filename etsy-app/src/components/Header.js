import React, { Component } from 'react'
import logo from '../logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" alt="shop-logo" src={logo} />
        <div className="right-header">
          <h1>The Etsy App</h1>
          <input type="text" name="search" />
        </div>
      </div>
    )
  }
}