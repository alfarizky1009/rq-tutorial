import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/navigation-screen-a">Navigation One</Link></li>
        <li><Link to="/navigation-screen-b">Navigation Two</Link></li>
        <li><Link to="/navigation-screen-c">Navigation Three</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;