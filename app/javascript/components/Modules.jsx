import React from "react";
import { Link } from "react-router-dom";

const Module = () => (
  <div className="d-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 56px)'}}>
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
         <div className="d-flex gap-2">
            <Link
              to="/module/1"
              className="btn btn-primary custom-button"
              role="button"
            >
              Module 1
            </Link>
            <Link
              to="/module/2"
              className="btn btn-primary custom-button"
              role="button"
            >
              Module 2
            </Link>
            <Link
              to="/module/3"
              className="btn btn-primary custom-button"
              role="button"
            >
              Module 3
            </Link>
          </div>
        </div>
    </div>
  </div>
  )

export default Module