import React from 'react'

const Jumbotron = ({children}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: 'calc(100vh - 56px)'}}>
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Jumbotron