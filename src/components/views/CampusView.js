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
      {campus.students.length ? 
        (campus.students.map( student => {
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{`${student.firstname} ${student.lastname}`}</h2>
              </Link>             
            </div>
          );
        })) : 
        (<h1>{`There are no students enrolled at ${campus.name}`}</h1>)
      }
    </div>
  );
};

export default CampusView;