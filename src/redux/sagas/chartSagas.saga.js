//chartSagas.js
import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';

// Worker saga to handle fetching age data
function* fetchAgesSaga() {
  try {
    console.log('FETCH_AGES saga started');
    const response = yield axios.get('/api/ages'); // Replace with the appropriate API endpoint for fetching age data
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

// Export the root saga
export default function* chartSaga() {
  console.log('Root saga: chartSaga');
  yield all([
    watchFetchAges(),
    // Add other sagas here if needed
  ]);
}
