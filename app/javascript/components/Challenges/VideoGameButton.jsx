import React, { useState } from 'react'

const VideoGameButton = () => {
  const [gameRunning, setGameRunning] = useState(false)


  return (
    <div className='container'>
      <h2>Video Game Button Challenge</h2>
      <p>Creating a button that will allow the user to play and pause a video game.</p>
      <ol>
        <li>The button should receive a class name of "video-game-button"</li>
        <li>
          When the user clicks the button, the gameRunning state's boolean value should be set to 
          the opposite value of what it currently is (from true to false or vice-versa). 
        </li>
        <li>
          If gameRunning is true, the button should display the word "Pause". If gameRunning is 
          false, the button should display the word "Play".
        </li>
      </ol>
      <h2>Solution</h2>
      <button className='btn btn-primary video-game-button' onClick={() => {setGameRunning(!gameRunning)}}>{gameRunning ? "Pause" : "Play"}</button>
      <p>Game running state: {`${gameRunning}`}</p>
    </div>
  )
}

export default VideoGameButton