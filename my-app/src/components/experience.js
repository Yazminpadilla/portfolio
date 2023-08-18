import '../App.css';

function Exper() {
    return (
      <div className='experbox2'>
         <h2 style={{color:"#e7d8c9", fontSize:"28px"}}>Experience</h2>
        <div className="job">
          <h4>Stanford University, Stanford, CA</h4>
          <p className="job-title">Section Leader/ Teaching Assistant for CS105</p>
          <p className="job-date">August 2023 - Present</p>
          <ul>
            <li>Actively engaged students in the CS 105 course content to enhance their understanding of computers and programming</li>
            <li>Coordinated and delivered practical 10 - 15 student sessions focused on website development and introduction to programming</li>
          </ul>
        </div>

        <div className="job">
          <h4>LaunchDarkly, Oakland, CA</h4>
          <p className="job-title">Software Engineering Intern</p>
          <p className="job-date">June 2021 - September 2021, June 2022 - September 2022</p>
          <ul>
            <li>Developed a new template editing feature to enhance customer experience</li>
            <li>Expanded service capabilities by adding new API endpoints in Go</li>
            <li>Contributed to production with code in Go and Javascript</li>
            <li>Ensured software robustness by writing Cypress integration and unit tests</li>
          </ul>
        </div>

        <div className="job">
          <h4>CareerVillage.org, Palo Alto, CA</h4>
          <p className="job-title">Software Engineering Intern</p>
          <p className="job-date">June 2020 - August 2020</p>
          <ul>
            <li>Improved site performance by identifying and removing obsolete CSS code</li>
            <li>Enhanced test suite reliability by fixing integration tests in Cypress.js</li>
            <li>Assisted in core development activities, implementing front-end changes</li>
          </ul>
        </div>
      </div>
    );
}
  
export default Exper;
