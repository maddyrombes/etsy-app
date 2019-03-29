import React, { Component } from 'react'
import LoadMore from './LoadMore'

export default class Main extends Component {
  render() {
    return (
      <div>
        {this.props.displayListings()}
        <LoadMore handleNextButton={this.props.handleNextButton}
        />
      </div>
    )
  }
}
