import React from 'react';
import { useEffect } from 'react';

function Content({ windowStatus, setWindowStatus, chartType, setChartType }) {
  console.log(windowStatus)

  return (

    <>
      {
        chartType === 'age' ? (
          <div>
            <h3>Age</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'gender' ? (
          <div>
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'family-size' ? (
          <div>
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'prescription' ? (
          <div>
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === 'map' ? (
          <div>
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : chartType === '#-of-patients' ? (
          <div>
            <h3>Gender</h3>
            <p>lorem ipsum calorum pursuant unpontia torentia munis. sup erca lifra gilist egexpia lidos hus.</p>
            <p>caloris fruignei moris brontix munis. famigla ageis genda cise.</p>
            <p>I'm testing the size and height. It can probably be changed later,
              but this seems pretty good from what I can tell.
            </p>
          </div>
        ) : (
          <div>
            <h2>Please Select a View</h2>
          </div>
        )
      }
    </>
  )
}

export default Content;