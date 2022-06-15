import React from 'react';
import './TopNav.css'

const TopNav = () => {
  return (
    <div className="topnav-bg">
      <ul className="topnav">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  );
};

export default TopNav;