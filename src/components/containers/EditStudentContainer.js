import Header from './Header';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';

const EditStudentContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student);

  // Initialize state
  const [firstName, setFirstName] = useState(student.firstName); 
  const [lastName, setLastName] = useState(student.lastName);
  const [campusId, setCampusId] = useState(student.campusId);
  const [imageUrl, setImageUrl] = useState(student.imageUrl);
  const [email, setEmail] = useState(student.email);
  const [gpa, setGpa] = useState(student.gpa);
  const [redirect, setRedirect] = useState(false); 
  const [redirectId, setRedirectId] = useState(student.id);

  // Capture input data when it is entered
  const handleChange = event => {
    switch(event.target.name) {
        case "firstname":
             setFirstName(event.target.value);
             break;
        case "lastname":
            setLastName(event.target.value);
            break;
        case "campusId":
            setCampusId(event.target.value);
            break;
        case "imageUrl":
            setImageUrl(event.target.value);
            break;
        case "email":
            setEmail(event.target.value);
            break;
        case "gpa":
            setGpa(event.target.value);
            break;
        default:
            break;
    }
  };

  // Take action after user click the submit button
  const handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let studentfield = {
        id: student.id,
        firstname: firstName,
        lastname: lastName,
        imageUrl: imageUrl,
        email: email,
        gpa: gpa,
        campusId: campusId
    };
    
    // Edit the campus in back-end database
    let editStudent = await dispatch(editStudentThunk(studentfield));
    setRedirect(true); 
  }

  // Unmount when the component is being removed from the DOM:
    useEffect(() => {
        dispatch(fetchStudentThunk(id));
      return () => {
         setRedirect(false);
         setRedirectId(student.id);
      }
    }, []);

    // Render new campus input form
    // Redirect to new campus's page after submit
    if(redirect) {
      console.log("redirectId:", redirectId);
      return (<Redirect to={`/student/${redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditStudentView 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}  
          student={student}    
        />
      </div>          
    );
}

export default EditStudentContainer;