import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import BackButton from "./BackButton";

const Module = () => {
  const modules = [1,2,3]

  return (
    <Jumbotron>
      <div className="d-flex gap-2">
        {modules.map((module) => {
          return (
            <Link
              key={module}
              to={`/module/${module}`}
              className="btn btn-primary custom-button"
              role="button"
            >
              Module {module}
            </Link>
          )
        })}
        <BackButton />
      </div>
    </Jumbotron>
  )
}

export default Module