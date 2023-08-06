import React from "react";
import { Link, useParams } from "react-router-dom";
import Jumbotron from "./Jumbotron";

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
              className="btn btn-primary btn-sm custom-button"
              role="button"
            >
              {link}
            </Link>
          )
        })}
      </div>
    </Jumbotron>
  )
}

export default ModuleHome