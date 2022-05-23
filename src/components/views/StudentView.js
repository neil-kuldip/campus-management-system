import { Link } from "react-router-dom";

const StudentView = ({ student }) => {
    if (!student.campus) {
      return (
      <div>
        <p>This student is not enrolled in a campus.</p>
        <Link to={`newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </div>
      );
    }
    // Render a single Student view 
    return (
      <div>
        <h1>{`${student.firstname} ${student.lastname}`}</h1>
        <img src={student.imageUrl} alt={`${student.firstname} ${student.lastname}`} />
        <h3>{`Email: ${student.email}`}</h3>
        <h3>{`GPA: ${student.gpa}`}</h3>
        <h3>{`Currently Attending: ${student.campus.name}`}</h3>
      </div>
    );
  
  };
  
  export default StudentView;