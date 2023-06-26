import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navlinks">
      <Link className="navLink" to="/">
        Dashboard
      </Link>
      {/* We can remove this Link if not needed -gd */}
      <Link className="navLink" to="/info">
        Info Page
      </Link>
      <Link className="navLink" to="/about">
        About
      </Link>
      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <LogOutButton className="navLink" />
        </>
      )}
    </div>
  );
}

export default Nav;
