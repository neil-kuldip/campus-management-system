import { FETCH_CAMPUS } from "../actions/actionTypes";  // Import Action Type

// Define default Initial State
const initialState = {
  students: [],  // Empty students array
};

// REDUCER:
const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campus;