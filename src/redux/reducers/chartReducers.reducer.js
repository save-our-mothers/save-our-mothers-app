//chartReducers.reducer.js
import { combineReducers } from 'redux';

const initialAgesState = [];

// Reducer function for age data
const ageReducer = (state = initialAgesState, action) => {
  switch (action.type) {
    case 'FETCH_AGES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};




const chartReducers = combineReducers({
  ages: ageReducer,

  // Reducers go here

});

export default chartReducers;