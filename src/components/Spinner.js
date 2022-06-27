import React, { Component } from 'react'
import spinner from './rocket-spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <img src={spinner} alt="loading spinner" />
      </div>
    )
  }
}
