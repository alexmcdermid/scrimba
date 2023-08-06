import React, { Component } from 'react'

export default class PassengerCounter extends Component {  
  componentDidMount() {
    const peopleCount = document.getElementById("people-count-el")
    const incrementButton = document.getElementById("increment-btn")
    incrementButton.addEventListener("click", () => {
      peopleCount.innerText = Number(peopleCount.innerText) + 1
    })
  }

  render() {
    return (
      <div>
        <h1>People entered: </h1>
        <h2 id="people-count-el">0</h2>
        <button id="increment-btn">Increment</button>
      </div>
    )
  }
}
