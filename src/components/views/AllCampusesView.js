/*==================================================
AllCampusesView.js
The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ deleteCampus, allCampuses }) => {
  // If there is no campus, display a message.
  if (!allCampuses.length) {
    return (
      <div>
        <p>There are no campuses.</p>
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </div>
      );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <div style={
        {
          display: "flex", 
          flexWrap: "wrap", 
          flexDirection: "row", 
          justifyContent: "space-around"
        }
      }>
        {allCampuses.map((campus) => (
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>
            <img src={campus.imageUrl} alt={campus.name} />
            <h4>{`Campus Id: ${campus.id}`}</h4>
            <p><strong>Address:</strong> <br/> {campus.address}</p>
            <p><strong>Descrpition:</strong> <br/> {campus.description}</p>
            <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// AllCampusesView.propTypes = {
//   allCampuses: PropTypes.array.isRequired,
// };

export default AllCampusesView;