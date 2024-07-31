import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar (props)  {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsViews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business"><i className="fa-solid fa-briefcase"></i> Business</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment"><i className="fa-solid fa-poo"></i> Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/general"><i className="fa-solid fa-border-all"></i> General</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/health"><i className="fa-solid fa-martini-glass"></i> Health</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/science"><i className="fa-solid fa-circle-up"></i> Science</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/sports"><i className="fa-solid fa-fire-flame-curved"></i> Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/technology"><i className="fa-solid fa-shuttle-space"></i> Technology</Link> </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch mx-4">
          <input onClick={props.toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" style={{ color: props.mode === "light" ? "#01253b" : "#ebeff0" }} htmlFor="flexSwitchCheckDefault">{props.mode}</label>
        </div>
      </nav>
    </div>
  )
}
