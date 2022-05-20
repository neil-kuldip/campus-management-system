/*==================================================
AllCampusesView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ campus, deleteCampus, allCampuses }) => {
  // If there is no campus, display a message.
  if (!allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{`Campus Name: ${campus.name}`}</h2>
          </Link>
          <img src={campus.imageUrl} alt={campus.name} />
          <h4>{`Campus Id: ${campus.id}`}</h4>
          <p>{`Campus Address: ${campus.address}`}</p>
          <p>{`Campus Descrpition: ${campus.description}`}</p>
          <hr/>
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;