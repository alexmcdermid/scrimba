import React from "react";
import { Link } from "react-router-dom";

const ModuleTwo = () => (
  <div id="links">
    <div className="d-flex gap-2">
          <Link
            to="/module/2/1"
            className="btn btn-sm custom-button"
            role="button"
          >
            1
          </Link>
        </div>
  </div>
)

export default ModuleTwo