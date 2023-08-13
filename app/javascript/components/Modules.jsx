import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import BackButton from "./BackButton";

const Module = () => {
  const modules = [1,2,3]

  return (
    <Jumbotron>
      <h1 className="display-4">Modules</h1>
      <p className="lead">
        A place to store Scrimba React module projects
      </p>
      <div className="d-flex gap-2">
        {modules.map((module) => {
          return (
            <Link
              key={module}
              to={`/module/${module}`}
              className="btn btn-primary"
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