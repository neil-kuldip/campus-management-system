const HomePageView = () => {
    // Render Home page view
    const adminBoardNames = [
      {
        id: 1,
        name: "Félix V. Matos Rodríguez", 
        position: "Chancellor",
      }, 
      {
        id: 2,
        name: "Daniel E. Lemons", 
        position: "Interim Executive Vice Chancellor & University Provost",
      }, 
      {
        id: 3,
        name: "Hector Batista", 
        position: "Executive Vice Chancellor & Chief Operating Officer",
      }, 
      {
        id: 4,
        name: "Derek Davis", 
        position: "General Counsel & Senior Vice Chancellor for Legal Affairs",
      }, 
      {
        id: 5,
        name: "Glenda Grace", 
        position: "Special Counsel & Senior Vice Chancellor for Institutional Affairs and Strategic Advancement",
      }, 
      {
        id: 6,
        name: "Pamela S. Silverblatt", 
        position: "Senior Vice Chancellor for Labor Relations",
      }, 
      {
        id: 7,
        name: "Mohamed Attalla", 
        position: "Vice Chancellor for Facilities Planning, Construction and Management",
      }, 
      {
        id: 8,
        name: "Christina Chiappa", 
        position: "Interim Vice Chancellor for Budget and Finance & Chief Financial Officer",
      }, 
      {
        id: 9,
        name: "Doriane K. Gloria", 
        position: "Vice Chancellor of Human Resources Management",
      }, 
      {
        id: 10,
        name: "Maite Junco", 
        position: "Vice Chancellor for Communications and Marketing",
      }, 
      {
        id: 11,
        name: "Denise B. Maybank", 
        position: "Vice Chancellor for Student Affairs",
      }, 
      {
        id: 12,
        name: "James D. Gallo", 
        position: "Vice Chancellor for University Advancement",
      }, 
      {
        id: 13,
        name: "Anne Roest", 
        position: "Interim Vice Chancellor for Technology & University Chief Information Officer",
      }, 
      {
        id: 14,
        name: "Richard R. White", 
        position: "Vice Chancellor for Risk, Audit and Compliance",
      }, 
      {
        id: 15,
        name: "Gayle M. Horwitz", 
        position: "Senior Advisor to the Chancellor & Secretary of the Board of Trustees",
      }, 
      {
        id: 16,
        name: "Dolly Martínez", 
        position: "Chancellor's Chief of Staff and Associate Vice Chancellor for the Executive Office",
      }, 
    ];
    return (
      <div >
        <h1>Welcome to the CUNY Campus Directory</h1>
        <div>
          {adminBoardNames.map((member) => (
            <div key={member.id}>
              <h4>{member.name}</h4>
              <h6>{member.position}</h6>
            </div>
          ))}
        </div>
      </div>
    );    
  }
  
  export default HomePageView;