import { Link } from "react-router-dom";

const StudentView = (props) => {
    const { student, campus } = props;
  
    if (!campus.length) {
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
        <h3>{`${student.campus.name}`}</h3>
        <h3>{`${student.email}`}</h3>
        <img src={student.imageUrl} alt={`${student.firstname} ${student.lastname}`} />
        <h3>{`${student.gpa}`}</h3>
      </div>
    );
  
  };
  
  export default StudentView;