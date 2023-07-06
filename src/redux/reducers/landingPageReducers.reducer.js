import { combineReducers } from 'redux';

const chartType = (state = '', action) => {
  switch (action.type) {
    case 'SET_CHART_TYPE':
      return action.payload;
    default:
      return state;
  }
}

const windowStatus = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_WINDOW_STATUS':
      return !state;
    default:
      return state;
  }
}

const landingPageReducers = combineReducers({
  chartType,
  windowStatus

});

export default landingPageReducers;