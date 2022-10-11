import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/auth/google/sign">SignUp</a>
          </li>
          <li>
            <a href="/api/logout">LogOut</a> 
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;