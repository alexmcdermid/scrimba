import React, { Component } from 'react'

export default class PassengerCounter extends Component {

  componentDidMount() {
    let peopleCount = document.getElementById("people-count-el").innerText
    console.log(peopleCount)
  }

  render() {
    return (
      <div>
        <h1>People entered: </h1>
        <h2 id="people-count-el">0</h2>
      </div>
    )
  }
}
