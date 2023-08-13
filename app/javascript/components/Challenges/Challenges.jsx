import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../Jumbotron'
import BackButton from '../BackButton'

const Challenges = () => {
  const links = ["video-game-button", "flash-cards"]

  return (
    <Jumbotron>
      <h1 className="display-4">Challenges</h1>
      <p className="lead">
        A place to store some React challenges
      </p>
      <div className="d-flex gap-2">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={`/challenges/${link}`}
              className="btn btn-primary"
              role="button"
            >
              {link}
            </Link>
          )
          })}
        <BackButton />
      </div>
      </Jumbotron>
  )
}

export default Challenges