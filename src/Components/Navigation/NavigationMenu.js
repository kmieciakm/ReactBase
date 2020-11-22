import React, { useState } from 'react';
import { Link } from "react-router-dom";

function NavigationMenu(){

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
        <Link to={`/`} onClick={() => setIsNavCollapsed(true)} className="navbar-brand text-info font-weight-bolder">
          <span className="">React Base App</span>
        </Link>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBox" aria-controls="navbarBox"
            aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarBox">
          <Link to={`/`} onClick={() => setIsNavCollapsed(true)} className="nav-link text-info">Home</Link>
          <Link to={`/about`} onClick={() => setIsNavCollapsed(true)} className="nav-link text-info">About</Link>
          <Link to={`/facts`} onClick={() => setIsNavCollapsed(true)} className="nav-link text-info">Animal Facts</Link>
        </div>
      </nav>
    );
}

export default NavigationMenu