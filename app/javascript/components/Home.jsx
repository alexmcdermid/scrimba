import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Home</h1>
        <p className="lead">
          A place to store links to scrimba react work
        </p>
        <hr className="my-4" />
        <div class="d-flex gap-2">
          <Link
            to="/x"
            className="btn btn-sm custom-button"
            role="button"
          >
            Example 1
          </Link>
          <Link
            to="/y"
            className="btn btn-sm custom-button"
            role="button"
          >
            Example 2
          </Link>
          <Link
            to="/z"
            className="btn btn-sm custom-button"
            role="button"
          >
            Example 3
          </Link>
        </div>
      </div>
    </div>
  </div>
);