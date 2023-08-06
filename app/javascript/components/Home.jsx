import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "./Jumbotron";

const Home = () => (
  <Jumbotron>
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
  </Jumbotron>
);

export default Home