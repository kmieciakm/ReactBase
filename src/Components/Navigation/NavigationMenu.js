import React, { useState } from 'react';
import { Link } from "react-router-dom";

function NavigationMenu(props){

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
        <Link to={`/`} class="navbar-brand text-info font-weight-bolder">
          <span className="">React Base App</span>
        </Link>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBox" aria-controls="navbarBox"
            aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarBox">
          <Link to={`/`} className="nav-link text-info">Home</Link>
          <Link to={`/about`} className="nav-link text-info">About</Link>
        </div>
      </nav>
    );
}

export default NavigationMenu