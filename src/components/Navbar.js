import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLocation } from 'react-router-dom';


export default function Navbar (props)  {
  let location = useLocation();

  useEffect(() => {
   console.log(location.pathname)
  }, [location]);

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
              <li className="nav-item"> <Link className={`nav-link  ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/business" ? "active" : ""}`} to="/business"><i className="fa-solid fa-briefcase"></i> Business</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment"><i className="fa-solid fa-poo"></i> Entertainment</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/general" ? "active" : ""}`} to="/general"><i className="fa-solid fa-border-all"></i> General</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/health" ? "active" : ""}`} to="/health"><i className="fa-solid fa-martini-glass"></i> Health</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/science" ? "active" : ""}`} to="/science"><i className="fa-solid fa-circle-up"></i> Science</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/sports" ? "active" : ""}`} to="/sports"><i className="fa-solid fa-fire-flame-curved"></i> Sports</Link> </li>
              <li className="nav-item"><Link className={`nav-link  ${location.pathname === "/technology" ? "active" : ""}`} to="/technology"><i className="fa-solid fa-shuttle-space"></i> Technology</Link> </li>
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
