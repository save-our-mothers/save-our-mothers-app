//chartReducers.reducer.js
import { combineReducers } from 'redux';

const initialAgesState = [];

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
const familySizeReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FAMILY_SIZE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};



const chartReducers = combineReducers({
  ages: ageReducer,
  familySize: familySizeReducer,
  // Reducers go here

});

export default chartReducers;