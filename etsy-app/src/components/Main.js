import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        {this.props.displayListings()}
        <button onClick={(e) => this.props.handleNextButton(e)} className="next-btn">Load more</button>
      </div>
    )
  }
}
