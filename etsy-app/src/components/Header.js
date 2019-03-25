import React, { Component } from 'react'
import logo from '../logo.png'

export default class Header extends Component {



  render() {
    return (
      <div className="header">
        <img className="logo" alt="shop-logo" src={logo} />
        <div className="right-header">
          <h1>The Etsy App</h1>
          <input onChange={(e) => this.props.handleInput(e)} type="text" name="search" input={this.props.keyword} />
          <button onClick={(e) => this.props.handleClick(e)}>Search</button>
        </div>
      </div>
    )
  }
}