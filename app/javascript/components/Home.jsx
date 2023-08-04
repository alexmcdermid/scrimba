import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="d-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 56px)'}}>
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Home</h1>
        <p className="lead">
          A place to store links to things
        </p>
        <hr className="my-4" />
        <div className="d-flex gap-2">
          <Link
            to="/modules"
            className="btn btn-primary btn-sm custom-button"
            role="button"
          >
            Scrimba Modules Page
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home