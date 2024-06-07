import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure the path to your CSS file is correct

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <p className='logo'>Love&Care</p>
        </Link>

      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>  
          <li className="nav-item"><Link to="/login">Register</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;