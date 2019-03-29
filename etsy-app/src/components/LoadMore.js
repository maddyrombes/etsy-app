import React, { Component } from 'react'

export default class LoadMore extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.props.handleNextButton(e)} className="next-btn">Load more</button>
      </div>
    )
  }
}
