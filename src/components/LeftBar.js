import React  from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default LeftBar=(props)=> {
    return (
      <>
        <div style={{ backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529ab" }} className="leftBar">
          <ul>
            <li className='leftBarList'><Link style={{ color: props.mode === "light" ? "#01253b" : "#f8f9fa" }} className='leftBarLinks' to="/">
            <i className="fas fa-home"></i> </Link></li>
            <li className='leftBarList'><Link className='leftBarLinks' to="/"></Link></li>
            <li className='leftBarList'><Link className='leftBarLinks' to="/"></Link></li>
          </ul>
        </div>
      </>
    )
}