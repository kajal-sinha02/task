import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-text">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="Logo" className="navbar-logo" />
        <span className="navbar-text">thetarzanway</span> {/* Added text next to the logo */}
      </div>
      
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="🔍 Where do you want to go ?" // Search icon as placeholder
        />
      </div>
      
      <div className="navbar-trip-btn">
        <button className="trip-btn">Create a Trip</button>
      </div>
    </nav>
  );
}

export default Navbar;
