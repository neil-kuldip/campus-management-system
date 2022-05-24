import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <img src={campus.imageUrl} alt={campus.name} />
      <h1>{`${campus.name}`}</h1>
      <p>{`${campus.address}`}</p>
      <p>{`${campus.description}`}</p>
        <Link to={`/editcampus/${campus.id}`}>
          <button>Edit Campus</button>
        </Link>
      <br/>
      {campus.students.length ? 
        (
          <div>
            <h3>Students Enrolled:</h3>
            {campus.students.map( student => {
              return (
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    <h4>{`${student.firstname} ${student.lastname}`}</h4>
                  </Link>             
                </div>
              );
            })}
          </div>
        ) : 
        (<h1>{`There are no students enrolled at ${campus.name}`}</h1>)
      }
    </div>
  );
};

export default CampusView;