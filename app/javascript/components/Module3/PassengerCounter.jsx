import React, { Component } from 'react'

export default class PassengerCounter extends Component {  
  componentDidMount() {
    const peopleCount = document.getElementById("people-count-el")
    const incrementButton = document.getElementById("increment-btn")
    const decrementButton = document.getElementById("decrement-btn")
    incrementButton.addEventListener("click", () => {
      peopleCount.innerText = Number(peopleCount.innerText) + 1
    })
    decrementButton.addEventListener("click", () => {
      peopleCount.innerText = Number(peopleCount.innerText) - 1
    })
  }

  render() {
    return (
      <div class="container">
        <div class="d-flex flex-row justify-content-center">
          <h1>People entered: <span id="people-count-el">0</span></h1>
        </div>
        <div class="d-flex flex-row justify-content-center">
          <button id="increment-btn" class="btn btn-primary">Increment</button>
          <button id="decrement-btn" class="btn btn-danger">Decrement</button>
        </div>
      </div>
    )
  }
}
