import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const updateData = () => {
    axios.get('/api/openemr').then(response => {
      console.log(response);
    });
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <Button color="success" variant="contained" size="small" onClick={updateData}>Update</Button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
