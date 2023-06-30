import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import SafeChildbirthLogo from './Logos/SafeChildbirthLogo.png'
import SaveOurMothersLogo from './Logos/SaveOurMothersLogo.png'

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navlinks">
      <img className="scf-logo" src={SafeChildbirthLogo}/>
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


  
      <Link className="navLink" to="/julie">
        Julie
      </Link>
      <Link className="navLink" to="/Jfam">
        Family Range
      </Link>


      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <LogOutButton className="navLink" />
        </>
      )}
      <img className="som-logo" src={SaveOurMothersLogo} />
    </div>
  );
}

export default Nav;
