import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import './Content.css'


function Content() {
  const chartType = useSelector(store => store.landingPageReducers.chartType);
  const windowStatus = useSelector(store => store.landingPageReducers.windowStatus);
  const dispatch = useDispatch();

  const closeWindow = () => {
    if (windowStatus === true) {
      dispatch({ type: 'TOGGLE_WINDOW_STATUS' });
    } 
    dispatch({ type: 'SET_CHART_TYPE', payload: '' });
  }

  return (

    <div className="popup">
      <Button color="secondary" className="close-btn" onClick={closeWindow}>close</Button>
      {
        chartType === 'age' ? (
          <div className="content-div">
            <h3>Age</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'gender' ? (
          <div className="content-div">
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'family-size' ? (
          <div className="content-div">
            <h3>Family Size</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'prescriptions' ? (
          <div className="content-div">
            <h3>Top 10 Prescription</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'map' ? (
          <div className="content-div">
            <h3>Geo Location Map</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === '#-of-patients' ? (
          <div className="content-div">
            <h3>Number of Patients</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : (
          <div className="content-div">
            <h2>Please Select a View</h2>
          </div>
        )
      }
    </div>
  )
}

export default Content;