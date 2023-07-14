// import axios from 'axios';
// import { put, all, takeLatest } from 'redux-saga/effects';
// // Worker saga fetching AGE data
// function* fetchAgesSaga() {
//   try {
//     console.log('FETCH_AGES saga started');
//     const response = yield axios.get('/api/ages');
//     console.log('Response from /api/ages:', response.data);
//     yield put({ type: 'FETCH_AGES_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_AGES saga error:', error);
//     yield put({ type: 'FETCH_AGES_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_AGES action and trigger the worker saga
// export function* watchFetchAges() {
//   console.log('Watcher saga: watchFetchAges');
//   yield takeLatest('FETCH_AGES', fetchAgesSaga);
// }
// // Worker saga fetching FAMILY SIZE data
// function* fetchFamilySizeSaga() {
//   try {
//     console.log('FETCH_FAMILY_SIZE saga started');
//     const response = yield axios.get('/api/family-size');
//     console.log('Response from /api/family-size:', response.data);
//     yield put({ type: 'FETCH_FAMILY_SIZE_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_FAMILY_SIZE saga error:', error);
//     yield put({ type: 'FETCH_FAMILY_SIZE_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_FAMILY_SIZE action and trigger the worker saga
// export function* watchFetchFamilySize() {
//   console.log('Watcher saga: watchFetchFamilySize');
//   yield takeLatest('FETCH_FAMILY_SIZE', fetchFamilySizeSaga);
// }
// // Worker saga fetching GENDER data
// function* fetchGenderDataSaga() {
//   try {
//     console.log('FETCH_GENDER_DATA saga started');
//     const response = yield axios.get('/api/gender');
//     console.log('Received gender data:', response.data);
//     yield put({ type: 'SET_GENDER_DATA', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_GENDER_DATA saga error:', error);
//     yield put({ type: 'FETCH_GENDER_DATA_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_GENDER_DATA action and trigger the worker saga
// export function* watchFetchGenderData() {
//   console.log('Watcher saga: watchFetchGenderData');
//   yield takeLatest('FETCH_GENDER_DATA', fetchGenderDataSaga);
// }
// // Worker saga fetching PATIENT VISITS data
// function* fetchPatientVisitsSaga() {
//   try {
//     console.log('FETCH_PATIENT_VISITS saga started');
//     const response = yield axios.get('/api/patient-visits');
//     console.log('Received patient visits data:', response.data);
//     yield put({ type: 'SET_PATIENT_VISITS_DATA', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_PATIENT_VISITS saga error:', error);
//     yield put({ type: 'FETCH_PATIENT_VISITS_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_PATIENT_VISITS action and trigger the worker saga
// export function* watchFetchPatientVisits() {
//   console.log('Watcher saga: watchFetchPatientVisits');
//   yield takeLatest('FETCH_PATIENT_VISITS', fetchPatientVisitsSaga);
// }
// // Worker saga fetching PATIENTS_UNIQUE data
// function* fetchPatientsUniqueSaga() {
//   try {
//     console.log('FETCH_PATIENTS_UNIQUE saga started');
//     const response = yield axios.get('/api/patients-unique');
//     console.log('Received patients unique data:', response.data);
//     yield put({ type: 'SET_PATIENTS_UNIQUE_DATA', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_PATIENTS_UNIQUE saga error:', error);
//     yield put({ type: 'FETCH_PATIENTS_UNIQUE_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_PATIENTS_UNIQUE action and trigger the worker saga
// export function* watchFetchPatientsUnique() {
//   console.log('Watcher saga: watchFetchPatientsUnique');
//   yield takeLatest('FETCH_PATIENTS_UNIQUE', fetchPatientsUniqueSaga);
// }
// // Worker saga fetching LOCATIONS data
// function* fetchLocationsSaga() {
//   try {
//     console.log('FETCH_LOCATIONS saga started');
//     const response = yield axios.get('/api/locations');
//     console.log('Received locations data:', response.data);
//     yield put({ type: 'FETCH_LOCATIONS_SUCCESS', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_LOCATIONS saga error:', error);
//     yield put({ type: 'FETCH_LOCATIONS_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_LOCATIONS action and trigger the worker saga
// export function* watchFetchLocations() {
//   console.log('Watcher saga: watchFetchLocations');
//   yield takeLatest('FETCH_LOCATIONS', fetchLocationsSaga);
// }
// // Worker saga fetching PRESCRIPTIONS data
// function* fetchPrescriptionsSaga() {
//   try {
//     console.log('FETCH_PRESCRIPTIONS saga started');
//     const response = yield axios.get('/api/prescriptions');
//     console.log('Received prescriptions data:', response.data);
//     yield put({ type: 'SET_PRESCRIPTIONS_DATA', payload: response.data });
//   } catch (error) {
//     console.log('FETCH_PRESCRIPTIONS saga error:', error);
//     yield put({ type: 'FETCH_PRESCRIPTIONS_ERROR', payload: error.message });
//   }
// }
// // Watcher saga to watch for the FETCH_PRESCRIPTIONS action and trigger the worker saga
// export function* watchFetchPrescriptions() {
//   console.log('Watcher saga: watchFetchPrescriptions');
//   yield takeLatest('FETCH_PRESCRIPTIONS', fetchPrescriptionsSaga);
// }
// // Export the root saga
// export default function* chartSaga() {
//   console.log('Root saga: chartSaga');
//   yield all([
//     watchFetchAges(),
//     watchFetchFamilySize(),
//     watchFetchGenderData(),
//     watchFetchPatientVisits(),
//     watchFetchLocations(),
//     watchFetchPatientsUnique(),
//     watchFetchPrescriptions(),
//   ]);
// }





// 8:39
// //chartReducers.reducer.js
// import { combineReducers } from 'redux';
// const initialAgesState = [];
// const initialFamilySizeState = [];
// const initialGenderState = [];
// const initialPatientVisitsState = [];
// const initialLocationsState = [];
// const initialPatientsUniqueState = [];
// const initialPrescriptionsState = [];
// //*Reducer function for age data
// const ageReducer = (state = initialAgesState, action) => {
//   switch (action.type) {
//     case 'FETCH_AGES_SUCCESS':
//       return action.payload;
//     default:
//       return state;
//   }
// };
// //*Reducer function for family size data
// const familySizeReducer = (state = initialFamilySizeState, action) => {
//   switch (action.type) {
//     case 'FETCH_FAMILY_SIZE_SUCCESS':
//       return action.payload;
//     default:
//       return state;
//   }
// };
// //*Reducer function for gender data
// const genderReducer =(state = initialGenderState, action)  => {
//   switch (action.type) {
//     case 'SET_GENDER_DATA':
//       console.log('Setting gender data:', action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// };
// //* Reducer function for patient visits data
// const patientVisitsReducer = (state = initialPatientVisitsState, action) => {
//   switch (action.type) {
//     case 'SET_PATIENT_VISITS_DATA':
//       console.log('Setting patient visits data:', action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// };
// // Reducer function for patients_unique data
// const patientsUniqueReducer = (state = initialPatientsUniqueState, action) => {
//   switch (action.type) {
//     case 'SET_PATIENTS_UNIQUE_DATA':
//       console.log('Setting patients unique data:', action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// };
// //*Reducer function for locations data
// const locationsReducer = (state = initialLocationsState, action) => {
//   switch (action.type) {
//     case 'FETCH_LOCATIONS_SUCCESS':
//       return action.payload;
//     default:
//       return state;
//   }
// };
// //* Reducer function for prescriptions data
// const prescriptionsReducer = (state = initialPrescriptionsState, action) => {
//   switch (action.type) {
//     case 'SET_PRESCRIPTIONS_DATA':
//       console.log('Setting prescriptions data:', action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// };
// console.log('Chart reducers loaded');
//   // Reducers go here
// const chartReducers = combineReducers({
//   ages: ageReducer,
//   familySize: familySizeReducer,
//   genderData: genderReducer,
//   patientVisitsData: patientVisitsReducer,
//   patientsUniqueData: patientsUniqueReducer,
//   locations: locationsReducer,
//   prescriptionsData: prescriptionsReducer,
// });
// export default chartReducers;


// !!!Previous block of code before Julie's changes -gd
import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

// Worker saga fetching AGE data
function* fetchAgesSaga() {
  try {
    console.log('FETCH_AGES saga started');
    const response = yield axios.get('/api/ages');
    console.log('Response from /api/ages:', response.data);
    yield put({ type: 'FETCH_AGES_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('FETCH_AGES saga error:', error);
    yield put({ type: 'FETCH_AGES_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_AGES action and trigger the worker saga
export function* watchFetchAges() {
  console.log('Watcher saga: watchFetchAges');
  yield takeLatest('FETCH_AGES', fetchAgesSaga);
}

// Worker saga fetching FAMILY SIZE data
function* fetchFamilySizeSaga() {
  try {
    console.log('FETCH_FAMILY_SIZE saga started');
    const response = yield axios.get('/api/family-size');
    console.log('Response from /api/family-size:', response.data);
    yield put({ type: 'FETCH_FAMILY_SIZE_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('FETCH_FAMILY_SIZE saga error:', error);
    yield put({ type: 'FETCH_FAMILY_SIZE_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_FAMILY_SIZE action and trigger the worker saga
export function* watchFetchFamilySize() {
  console.log('Watcher saga: watchFetchFamilySize');
  yield takeLatest('FETCH_FAMILY_SIZE', fetchFamilySizeSaga);
}

// Worker saga fetching GENDER data
function* fetchGenderDataSaga() {
  try {
    console.log('FETCH_GENDER_DATA saga started');
    const response = yield axios.get('/api/gender');
    console.log('Received gender data:', response.data);
    yield put({ type: 'SET_GENDER_DATA', payload: response.data });
  } catch (error) {
    console.log('FETCH_GENDER_DATA saga error:', error);
    yield put({ type: 'FETCH_GENDER_DATA_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_GENDER_DATA action and trigger the worker saga
export function* watchFetchGenderData() {
  console.log('Watcher saga: watchFetchGenderData');
  yield takeLatest('FETCH_GENDER_DATA', fetchGenderDataSaga);
}

// Worker saga fetching PATIENT VISITS data
function* fetchPatientVisitsSaga() {
  try {
    console.log('FETCH_PATIENT_VISITS saga started');
    const response = yield axios.get('/api/patient-visits');
    console.log('Received patient visits data:', response.data);
    yield put({ type: 'SET_PATIENT_VISITS_DATA', payload: response.data });
  } catch (error) {
    console.log('FETCH_PATIENT_VISITS saga error:', error);
    yield put({ type: 'FETCH_PATIENT_VISITS_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_PATIENT_VISITS action and trigger the worker saga
export function* watchFetchPatientVisits() {
  console.log('Watcher saga: watchFetchPatientVisits');
  yield takeLatest('FETCH_PATIENT_VISITS', fetchPatientVisitsSaga);
}



// Worker saga fetching PATIENTS_UNIQUE data
function* fetchPatientsUniqueSaga() {
  try {
    console.log('FETCH_PATIENTS_UNIQUE saga started');
    const response = yield axios.get('/api/patients-unique');
    console.log('Received patients unique data:', response.data);
    yield put({ type: 'SET_PATIENTS_UNIQUE_DATA', payload: response.data });
  } catch (error) {
    console.log('FETCH_PATIENTS_UNIQUE saga error:', error);
    yield put({ type: 'FETCH_PATIENTS_UNIQUE_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_PATIENTS_UNIQUE action and trigger the worker saga
export function* watchFetchPatientsUnique() {
  console.log('Watcher saga: watchFetchPatientsUnique');
  yield takeLatest('FETCH_PATIENTS_UNIQUE', fetchPatientsUniqueSaga);
}


// Worker saga fetching LOCATIONS data
function* fetchLocationsSaga() {
  try {
    console.log('FETCH_LOCATIONS saga started');
    const response = yield axios.get('/api/locations');
    console.log('Received locations data:', response.data);
    yield put({ type: 'FETCH_LOCATIONS_SUCCESS', payload: response.data });
  } catch (error) {
    console.log('FETCH_LOCATIONS saga error:', error);
    yield put({ type: 'FETCH_LOCATIONS_ERROR', payload: error.message });
  }
}

// Watcher saga to watch for the FETCH_LOCATIONS action and trigger the worker saga
export function* watchFetchLocations() {
  console.log('Watcher saga: watchFetchLocations');
  yield takeLatest('FETCH_LOCATIONS', fetchLocationsSaga);
}

// Export the root saga
export default function* chartSaga() {
  console.log('Root saga: chartSaga');
  yield all([
    watchFetchAges(),
    watchFetchFamilySize(),
    watchFetchGenderData(),
    watchFetchPatientVisits(),
    watchFetchLocations(),
    watchFetchPatientsUnique(),
  ]);
}

