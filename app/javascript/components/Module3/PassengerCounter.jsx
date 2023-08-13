import React, { Component } from 'react'
import Jumbotron from '../Jumbotron'
import BackButton from '../BackButton'

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
      <Jumbotron>
        <div className="d-flex flex-row justify-content-center">
          <h1>People entered: <span id="people-count-el">0</span></h1>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button id="decrement-btn" className="btn btn-danger">Decrement</button>
          <button id="increment-btn" className="btn btn-primary">Increment</button>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button id="save-btn" className="btn btn-success">Save</button>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <h2>Previous Entries: <span id="saved-content-el">0</span></h2>
        </div>
        <hr/>
        <div className='d-flex flex-row justify-content-center'> 
          <BackButton />
        </div>
      </Jumbotron>
    )
  }
}
