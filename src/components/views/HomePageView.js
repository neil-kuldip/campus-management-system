import homepageImg from '../../assets/homepage_img.png';

const HomePageView = () => {
    // Render Home page view
    return (
      <div>
          <img style={{ marginTop: "2vh", width: "70%", }} src={homepageImg} alt="College Lifecycle" />
      </div>
    );    
  }
  
  export default HomePageView;