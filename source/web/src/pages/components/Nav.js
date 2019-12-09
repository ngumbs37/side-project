import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="text-center">
      <title> anything</title>
      <div>
        <p className="content-center" style={{ 'backgroundColor': '#fff', width: '20em' }}> i cant believe</p>
        <Link className="Nav-link" to="/" >Link to Home</Link>
        <Link className="Nav-link" to="/user">Link to User</Link>
      </div>
    </nav>
  );
}

export default Nav;
