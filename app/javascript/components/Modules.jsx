import React from "react";
import { Link } from "react-router-dom";

const Module = () => (
  <div id="links">
    <div className="d-flex gap-2">
          <Link
            to="/module/1"
            className="btn btn-sm custom-button"
            role="button"
          >
            Module 1
          </Link>
        </div>
  </div>
)

export default Module