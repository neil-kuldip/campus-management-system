/*==================================================
CampusContainer.js
The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import { useParams } from "react-router-dom";
import { CampusView } from "../views";

const CampusContainer = (props) => {
  const dispatch = useDispatch();
  const campus = useSelector((state) => state.campus);
  const { id } = useParams();
  // Get the specific campus data from back-end database
    useEffect(() => {
        // Get campus ID from URL (API link)
        dispatch(fetchCampusThunk(id));
    }, []);

  // Render a Campus view by passing campus data as props to the corresponding View component
    return (
      <div>
        <Header />
        <CampusView campus={campus} />
      </div>
    );
}

// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
// const mapState = (state) => {
//   return {
//     campus: state.campus,  // Get the State object from Reducer "campus"
//   };
// };
// // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return {
//     fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
//   };
// };

// // Export store-connected container by default
// // CampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// // (and re-read the values when the Store State updates).
// export default connect(mapState, mapDispatch)(CampusContainer);
export default CampusContainer;