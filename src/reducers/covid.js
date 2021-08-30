import { SET_DATA, SET_DATA_COUNTRY } from '../instances/instances.js';

const initialState = {
  data: []
}

function covidReducer(state = initialState, action) {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    case SET_DATA_COUNTRY:
      return {
        ...state, 
        dataCountry: action.payload
      }
    default:
      return state;
  }
}

export default covidReducer;