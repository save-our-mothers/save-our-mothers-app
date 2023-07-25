//chartReducers.reducer.js
import { combineReducers } from 'redux';

const initialAgesState = [];
const initialFamilySizeState = [];
const initialGenderState = [];
const initialPatientVisitsState = [];
const initialLocationsState = [];
const initialPatientsUniqueState = [];
const initialMedsState = [];

//*Reducer function for age data
const ageReducer = (state = initialAgesState, action) => {
  switch (action.type) {
    case 'FETCH_AGES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

//*Reducer function for family size data
const familySizeReducer = (state = initialFamilySizeState, action) => {
  switch (action.type) {
    case 'FETCH_FAMILY_SIZE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};


//*Reducer function for gender data
const genderReducer =(state = initialGenderState, action)  => {
  switch (action.type) {
    case 'SET_GENDER_DATA':
      console.log('Setting gender data:', action.payload); 
      return action.payload;
    default:
      return state;
  }
};

//* Reducer function for patient visits data
const patientVisitsReducer = (state = initialPatientVisitsState, action) => {
  switch (action.type) {
    case 'SET_PATIENT_VISITS_DATA':
      console.log('Setting patient visits data:', action.payload);
      return action.payload;
    default:
      return state;

  }
};

// Reducer function for patients_unique data
const patientsUniqueReducer = (state = initialPatientsUniqueState, action) => {
  switch (action.type) {
    case 'SET_PATIENTS_UNIQUE_DATA':
      console.log('Setting patients unique data:', action.payload);
      return action.payload;
    default:
      return state;
  }
};


//*Reducer function for locations data
const locationsReducer = (state = initialLocationsState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATIONS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const topMedsReducer = (state = initialMedsState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_MEDS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};



console.log('Chart reducers loaded');

  // Reducers go here
const chartReducers = combineReducers({
  ages: ageReducer,
  familySize: familySizeReducer,
  genderData: genderReducer,
  patientVisitsData: patientVisitsReducer,
  patientsUniqueData: patientsUniqueReducer,
  locations: locationsReducer,
  topMedications: topMedsReducer,

});

export default chartReducers;