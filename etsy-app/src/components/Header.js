import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>The Etsy App</h1>
        <input type="text" name="search" />
      </div>
    )
  }
}