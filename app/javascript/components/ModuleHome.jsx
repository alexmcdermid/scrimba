import React from "react";
import { Link, useParams } from "react-router-dom";

const ModuleHome = () => {
  const { id } = useParams();
  const links = {
    1 : ["display-photos"]
  }
  const linksForId = links[id] || [];

  return (
    <div id="links" className="d-flex gap-2">
      {linksForId.map((link, index) => {
        return (
          <Link
            key={index}
            to={`/module/${id}/${link}`}
            className="btn btn-sm custom-button"
            role="button"
          >
            {link}
          </Link>
        )
      })}
    </div>
  )
}

export default ModuleHome