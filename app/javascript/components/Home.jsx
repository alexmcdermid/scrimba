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
        className="btn btn-primary"
        role="button"
      >
        Scrimba Modules
      </Link>
      <Link
        to="/challenges"
        className="btn btn-primary"
        role="button"
      >
        Scrimba React Challenges
      </Link>
    </div>
  </Jumbotron>
);

export default Home