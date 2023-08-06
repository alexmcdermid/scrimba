import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  function goBackHandler() {
    navigate(-1);
  }

  return (
    <Link
      key="back"
      onClick={goBackHandler}
      className="btn btn-secondary custom-button"
      role="button"
    >
      Back
    </Link>
  )
}

export default BackButton