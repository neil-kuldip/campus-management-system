/*==================================================
NewStudentContainer.js
The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

const NewStudentContainer = (props) => {
  // Initialize state
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [campusId, setCampusId] = useState(null);
    const [redirect, setRedirect] = useState(false); 
    const [redirectId, setRedirectId] = useState(null);

  // Capture input data when it is entered
  const handleChange = event => {
    switch(event.target.name) {
        case firstName:
             setFirstName(event.target.value);
             break;
        case lastName:
            setLastName(event.target.value);
            break;
        case campusId:
            setCampusId(event.target.value);
            break;
        default:
            break;
    }
  };

  // Take action after user click the submit button
  const handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let student = {
        firstname: firstName,
        lastname: lastName,
        campusId: campusId
    };
    
    // Add new student in back-end database
    let newStudent = await props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    setFirstName(""); 
    setLastName(""); 
    setCampusId(null); 
    setRedirect(true); 
    setRedirectId(newStudent.id);
  }

  // Unmount when the component is being removed from the DOM:
    useEffect(() => {
      return () => {
         setRedirect(false);
         setRedirectId(null);
      }
    }, []);

  // Render new student input form
    // Redirect to new student's page after submit
    if(redirect) {
      return (<Redirect to={`/student/${redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <NewStudentView 
          handleChange = {handleChange} 
          handleSubmit={handleSubmit}      
        />
      </div>          
    );
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewStudentContainer);