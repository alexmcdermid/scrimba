import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div id="links">
    <div className="d-flex gap-2">
          <Link
            to="/module/1/display-photos"
            className="btn btn-sm custom-button"
            role="button"
          >
            Display Photos with public API
          </Link>
        </div>
  </div>
)