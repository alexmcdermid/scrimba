import React, { useState } from 'react'

const FlashCards = () => {
  const [flashCard, setFlashCard] = useState({
		question: "What is React?",
		choices: ["A JavaScript framework", "A JavaScript library"],
		answer: "A JavaScript library.",
		explanation: `It's absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them as
              pedantically as possible, preferably starting your response with
              the phrase "um, actually..."`,
    flipped: false
	})

  return (
    <div className="container">
      <h2>Flash Card Challenge</h2>
      <p>Creating a flashcard that can be flipped on click.</p>
      <ol>
        <li>
          When the user clicks on the flashcard, the CSS class "flipped" should 
          be added to the div with the className of "flash-card".</li>
        <li>
          If the user clicks on the flashcard again, the class "flipped" should be removed 
          from the div. 
        </li>
        <li>
          The same pattern should be repeated for any subsequent clicks, so that the user can 
          continue flipping the card back and forth as many times as they want. 
        </li>
      </ol>
      <h2>Solution: </h2>
      <div className={`flash-card ${flashCard.flipped ? "flipped" : ""}`} onClick={() => {setFlashCard(prev => ({...prev, flipped: !prev.flipped}))}}>
        <div className="flash-card-inner">
          <div className="flash-card-front">
            <p className="question">{flashCard.question}</p>
            <ol type="a">
              {flashCard.choices.map((choice, index) => (
                <li key={index}>{choice}</li>
              ))}
            </ol>
          </div>
          <div className="flash-card-back">
            <p className="answer">{flashCard.answer}</p>
            <p>{flashCard.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCards