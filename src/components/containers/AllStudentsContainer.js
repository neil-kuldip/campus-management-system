/*==================================================
AllStudentsContainer.js
The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from "react-router-dom";

import { 
  fetchAllStudentsThunk,
  deleteStudentThunk
} from '../../store/thunks';

import AllStudentsView from '../views/AllStudentsView';

const AllStudentsContainer = (props) => {
  const dispatch = useDispatch();
  const allStudents = useSelector((state) => state.allStudents);
  // Get all students data from back-end database
    useEffect(() => {
        dispatch(fetchAllStudentsThunk());
    }, []);

  // Render All Students view by passing all students data as props to the corresponding View component
    return(
        <div>
        <Header />
        <AllStudentsView 
            students={allStudents}
            deleteStudent={(studentId) => dispatch(deleteStudentThunk(studentId))}   
        />
        </div>
    );
}

// The following 2 input arguments are passed to the "connect" function used by "AllStudentsContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allStudents".
// const mapState = (state) => {
//   return {
//     allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
//   };
// };
// // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return {
//     fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
//     deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
//   };
// };

// // Export store-connected container by default
// // AllStudentsContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// // (and re-read the values when the Store State updates).
// export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));
export default AllStudentsContainer;