import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import SafeChildbirthLogo from './Logos/SafeChildbirthLogo.png'
import SaveOurMothersLogo from './Logos/SaveOurMothersLogo.png'

function Nav() {
  const user = useSelector((store) => store.user);

  const somnowLink = () => {
    location.href = "https://www.somnow.org/get_involved"
  }

  return (
    <div className="navlinks">
      <img className="scf-logo" src={SafeChildbirthLogo} />
      <Link className="navLink" to="/">
        Dashboard
      </Link>
      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <Link className="navLink" to="/user">
            User Page
          </Link>
          {/* <LogOutButton className="navLink" /> */}
        </>
      )}
      <Link className="navLink" to="/about">
        About
      </Link>
      <button className="navLink" onClick={somnowLink}>somnow.org</button>
      <img className="som-logo" src={SaveOurMothersLogo} />
    </div>
  );
}

export default Nav;
