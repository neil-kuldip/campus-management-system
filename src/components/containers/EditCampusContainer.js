import Header from './Header';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';

const EditCampusContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const campus = useSelector((state) => state.campus);

  // Initialize state
    const [name, setName] = useState(campus.name); 
    const [imageUrl, setImageUrl] = useState(campus.imageUrl);
    const [address, setAddress] = useState(campus.address); 
    const [description, setDescription] = useState(campus.description);
    const [redirect, setRedirect] = useState(false);
    const [redirectId, setRedirectId] = useState(campus.id);

  // Capture input data when it is entered
  const handleChange = event => {

    switch(event.target.name) {
        case "name":
             setName(event.target.value);
             break;
        case "imageUrl":
            setImageUrl(event.target.value);
            break;
        case "address":
            setAddress(event.target.value);
            break;
        case "description":
            setDescription(event.target.value);
            break;
        default:
            break;
    }
  };

  // Take action after user click the submit button
  const handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let campusfield = {
        id: campus.id,
        name: name,
        imageUrl: imageUrl,
        address: address,
        description: description 
    };
    
    // Edit the campus in back-end database
    let editCampus = await dispatch(editCampusThunk(campusfield));
    // Update state, and trigger redirect to show the edited campus
    // setName(campus.name); 
    // setImageUrl(campus.imageUrl); 
    // setAddress(campus.address); 
    // setDescription(campus.description);
    // setRedirectId(campus.id);
    setRedirect(true); 
    console.log("Campus Id:", campus.id);
  }

  // Unmount when the component is being removed from the DOM:
    useEffect(() => {
        dispatch(fetchCampusThunk(id));
      return () => {
         setRedirect(false);
         setRedirectId(campus.id);
      }
    }, []);

    // Render new campus input form
    // Redirect to new campus's page after submit
    if(redirect) {
      console.log("redirectId:", redirectId);
      return (<Redirect to={`/campus/${redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditCampusView 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}  
          campus={campus}    
        />
      </div>          
    );
}

// const mapDispatch = (dispatch) => {
//     return({
//         addCampus: (campus) => dispatch(addCampusThunk(campus)),
//     })
// }

// export default connect(null, mapDispatch)(NewCampusContainer);
export default EditCampusContainer;