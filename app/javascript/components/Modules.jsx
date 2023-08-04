import React from "react";
import { Link, useParams } from "react-router-dom";

const Module = () => {
  const modules = [1,2,3]

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 56px)'}}>
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Module