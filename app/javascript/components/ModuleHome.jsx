import React from "react";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import BackButton from "./BackButton";

const ModuleHome = () => {
  const { id } = useParams();
  const links = {
    1 : ["display-photos"],
    3 : ["passenger-counter"]
  }
  const linksForId = links[id] || [];

  return (
    <Jumbotron>
      <div id="links" className="d-flex gap-2">
        {linksForId.map((link, index) => {
          return (
            <Link
              key={index}
              to={`/module/${id}/${link}`}
              className="btn btn-primary custom-button"
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

export default ModuleHome