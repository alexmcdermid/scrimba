import React, { Component } from 'react'

export default class PassengerCounter extends Component {  
  componentDidMount() {
    // I know this is not reactful just following the first parts of scrimba where they do all this in JS and html
    const peopleCount = document.getElementById("people-count-el")
    const savedContent = document.getElementById("saved-content-el")
    const incrementButton = document.getElementById("increment-btn")
    const decrementButton = document.getElementById("decrement-btn")
    const saveButton = document.getElementById("save-btn")
    incrementButton.addEventListener("click", () => {
      peopleCount.innerText = Number(peopleCount.innerText) + 1
    })
    decrementButton.addEventListener("click", () => {
      peopleCount.innerText = Number(peopleCount.innerText) - 1
    })
    saveButton.addEventListener("click", () => {
      if (Number(savedContent.innerText) != 0) {
        savedContent.innerText = savedContent.innerText + "..." + peopleCount.innerText
      } else {
        savedContent.innerText = peopleCount.innerText
      }
    })
  }

  render() {
    return (
      <div class="container">
        <div class="d-flex flex-row justify-content-center">
          <h1>People entered: <span id="people-count-el">0</span></h1>
        </div>
        <div class="d-flex flex-row justify-content-center">
          <button id="decrement-btn" class="btn btn-danger">Decrement</button>
          <button id="increment-btn" class="btn btn-primary">Increment</button>
        </div>
        <div class="d-flex flex-row justify-content-center">
          <button id="save-btn" class="btn btn-success">Save</button>
        </div>
        <div class="d-flex flex-row justify-content-center">
          <h2>Previous Entries: <span id="saved-content-el">0</span></h2>
        </div>
      </div>
    )
  }
}
