import * as ac from './actions/actionCreators';  // Import Action Creators ("ac" keyword Action Creator)
const axios = require('axios');

// Thunk Creator for All Campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/campuses`);  
    dispatch(ac.fetchAllCampuses(res.data));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for Add Campuses
export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/campuses`, campus);  
    dispatch(ac.addCampus(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for Delete Campuses
export const deleteCampusThunk = campusId => async dispatch => {
  try {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(campusId));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for Edit Campuses
export const editCampusThunk = campus => async dispatch => {
  try {
    let updatedCampus = await axios.put(`/api/campuses/${campus.id}`, campus); 
    dispatch(ac.editCampus(updatedCampus));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator Single Campus
export const fetchCampusThunk = (id) => async (dispatch) => {  // The THUNK
  try {
    let res = await axios.get(`/api/campuses/${id}`);  
    dispatch(ac.fetchCampus(res.data));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for All Students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/students`);  
    dispatch(ac.fetchAllStudents(res.data));  
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator Add Students
export const addStudentThunk = (student) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/students`, student);  
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator Delete Students
export const deleteStudentThunk = studentId => async dispatch => {
  try {
    await axios.delete(`/api/students/${studentId}`);  
    dispatch(ac.deleteStudent(studentId));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for Edit Students
export const editStudentThunk = student => async dispatch => {
  try {
    let updatedStudent = await axios.put(`/api/students/${student.id}`, student); 
    dispatch(ac.editStudent(updatedStudent));
  } catch(err) {
    console.error(err);
  }
};

// Thunk Creator for Single Students
export const fetchStudentThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/students/${id}`);  
    dispatch(ac.fetchStudent(res.data));
  } catch(err) {
    console.error(err);
  }
};