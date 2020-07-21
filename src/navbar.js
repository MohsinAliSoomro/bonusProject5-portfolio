import React from 'react'

export default function Navbar() {
  return (
    <div 
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    >
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a  className="navbar-brand h4" href="https://linkdin.com">New Trend</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon zindex-dropdown"></span>
      </button>
      <div className=" collapse navbar-collapse " id="navbarNav">
        <div data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aus-easing="ease-in-out"
        >
        <ul className="navbar-nav">
          <li className="nav-item h5 active">
            <a href="https://facebook.com" className="nav-link" >Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item h5">
            <a href="https://github.com" className="nav-link" >About</a>
          </li>
          <li className="nav-item h5">
            <a href="https://instagram.com" className="nav-link" >Contact</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}