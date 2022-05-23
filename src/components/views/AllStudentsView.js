import { Link } from "react-router-dom";

const AllStudentsView = ({ students, deleteStudent }) => {
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <div style={
        {
          display: "flex", 
          flexWrap: "wrap", 
          flexDirection: "row", 
          justifyContent: "space-around",
          textAlign: "center",
          marginLeft: "2vw"
        }
      }>
        {students.map((student) => {
            let name = `${student.firstname} ${student.lastname}`;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <h2>{name}</h2>
                </Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </div>
            );
          }
        )}
      </div>
      
    </div>
  );
};


export default AllStudentsView;