import Header from './Header';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';

const NewCampusContainer = (props) => {
  // Initialize state
    const [name, setName] = useState(""); 
    const [imageUrl, setImageUrl] = useState("");
    const [address, setAddress] = useState(""); 
    const [description, setDescription] = useState("");
    const [redirect, setRedirect] = useState(null);
    const [redirectId, setRedirectId] = useState(null);

  // Capture input data when it is entered
  const handleChange = event => {
    switch(event.target.name) {
        case name:
             setName(event.target.value);
             break;
        case imageUrl:
            setImageUrl(event.target.value);
            break;
        case address:
            setAddress(event.target.value);
            break;
        case description:
            setDescription(event.target.value);
            break;
        default:
            break;
    }
  };

  // Take action after user click the submit button
  const handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let campus = {
        name: name,
        imageUrl: imageUrl,
        address: address,
        description: description 
    };
    
    // Add new campus in back-end database
    let newCampus = await props.addCampus(campus);

    // Update state, and trigger redirect to show the new campus
    setName(""); 
    setImageUrl(""); 
    setAddress(""); 
    setDescription("");
    setRedirect(true) 
    setRedirectId(newCampus.id);
  }

  // Unmount when the component is being removed from the DOM:
    useEffect(() => {
      return () => {
         setRedirect(false);
         setRedirectId(null);
      }
    }, []);

    // Render new campus input form
    // Redirect to new campus's page after submit
    if(redirect) {
      return (<Redirect to={`/campus/${redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <NewCampusView 
          handleChange = {handleChange} 
          handleSubmit={handleSubmit}      
        />
      </div>          
    );
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);