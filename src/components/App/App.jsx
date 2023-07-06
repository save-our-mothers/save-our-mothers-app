import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import TopMeds from '../TopMeds/TopMeds';

import './App.css';


import Julie from '../Jchart/Jchart';
import Jfam from '../Jfam/Jfam';
import Jgender from '../Jgender/Jgender';
import Jvisits from '../Jvisits/Jvisits';
import Jmap from '../Jmap/Jmap';
import Junique from '../Junique/Junique';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus);

  if (windowStatus === true) {
    document.body.classList.add('active-blur')
  } else {
    document.body.classList.remove('active-blur')
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
        <Nav />
        {/* Added to help keep the pages uniform with the navbar on the left. -gd */}
        <div className="app-content-div">
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact path="/about">
            <AboutPage />
          </Route>

          {/* Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact path="/user">
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // added this for testing, feel free to out the chart where you want -Jake
            exact path="/prescriptions">
            <TopMeds />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact path="/info">
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact path="/registration">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact path="/home">
              <LandingPage />
          </Route>

 
          <Route exact path="/julie">
            <Julie />
          </Route>
          <Route exact path="/jfam">
            <Jfam />
          </Route>
          <Route exact path="/jgender">
            <Jgender/>
          </Route>
          <Route exact path="/jvisits">
            <Jvisits/>
          </Route>
          <Route exact path="/jmap">
            <Jmap/>
          </Route>
          <Route exact path="/junique">
            <Junique/>
          </Route>




          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
