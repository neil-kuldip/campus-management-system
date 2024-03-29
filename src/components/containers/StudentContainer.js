/*==================================================
StudentContainer.js
The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { useParams } from "react-router-dom";
import { StudentView } from "../views";

const StudentContainer = (props) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);
  const { id } = useParams();
  // Get student data from back-end database
    useEffect(() => {
        //getting student ID from url
        dispatch(fetchStudentThunk(id));
    }, []);

  // Render Student view by passing student data as props to the corresponding View component
    return (
      <div>
        <Header />
        <StudentView student={student} />
      </div>
    );
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
// const mapState = (state) => {
//   return {
//     student: state.student,  // Get the State object from Reducer "student"
//   };
// };
// // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return {
//     fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
//   };
// };

// Export store-connected container by default
// StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
// export default connect(mapState, mapDispatch)(StudentContainer);
export default StudentContainer;