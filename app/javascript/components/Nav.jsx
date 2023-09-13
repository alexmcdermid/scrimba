import React, { useContext} from 'react'
import { ThemeContext } from '../ThemeContext';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (oldTheme) => {
    if (oldTheme === "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/challenges">Challenges</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/modules">Modules</a>
            </li>
          </ul>
          <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="activate" 
                onChange={() => { handleThemeChange( theme ) }}
              />
              <label className="form-check-label" htmlFor="activate">
                <i className={`bi ${theme === "dark" ? 'bi-moon-fill text-light' : 'bi-sun-fill'} me-2`} />
              </label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav