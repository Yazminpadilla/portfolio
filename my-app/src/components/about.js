import '../App.css';
import profileImage from '../IMG_3166.JPG'; 
function About() {
    return (
      <div >
        <h3 className="AboutMe">About Me</h3>
        <div className="about-content">
          <img src={profileImage} alt="Profile" className="about-image"/>
          <div className="about-bio">
            <div>
            I'm a senior Computer Science major at Stanford, proudly representing as a 
            first-generation and low-income student. My journey into engineering and computer science began serendipitously; a chance meeting with a Latina software engineer in a cafe illuminated the boundless potential of engineering. Driven by a passion for education, 
            creativity, social, and environmental justice, I'm eager to intertwine my passions with tech. When I'm not immersed in code, I indulge in baking, cherish time with my pet birds, or delve into the vibrant world of anime! 
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default About
