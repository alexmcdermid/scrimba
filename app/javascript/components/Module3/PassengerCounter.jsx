import React from 'react'

const PassengerCounter = () => {
  let peopleCount = document.getElementById("people-count-el").innerText
  return (
    <div>
      <h1>People entered: </h1>
      <h2 id="people-count-el"></h2>
    </div>
  )
}

export default PassengerCounter