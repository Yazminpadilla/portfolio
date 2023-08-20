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
                <li>Spearheaded the development of a new template editing feature using Go and JavaScript, directly enhancing customer usability and engagement.</li>
                <li>Elevated the system's functionality by designing and implementing new API endpoints in Go, thereby expanding service capabilities and accommodating evolving business needs.</li>
                <li>Consistently contributed to production-ready code in Go and JavaScript, adhering to best practices and code reviews, resulting in an overall increase in system efficiency.</li>
                <li>Fortified software reliability by meticulously writing Cypress integration and unit tests, promptly identifying bottlenecks and faults to maintain a robust production environment.</li>
            </ul>

            <h5>Team Collaboration & Leadership</h5>
            <ul>
                <li>Actively participated in Agile team meetings, offering valuable insights that influenced team decisions.</li>
                <li>Fulfilled a cross-functional role by collaborating with back-end developers, front-end engineers, and web designers to optimize the user interface and experience.</li>
                <li>Spearheaded inter-team meetings to collect feedback on builds, fostering a culture of continuous improvement and ensuring alignment with user and customer needs.</li>
            </ul>
        </div>

        <div className="job">
          <h4>CareerVillage.org, Palo Alto, CA</h4>
          <p className="job-title">Software Engineering Intern</p>
          <p className="job-date">June 2020 - August 2020</p>
          <ul>
        <li>Elevated website responsiveness and load times by conducting an audit to identify and eliminate obsolete CSS code, leading to a noticeable improvement in user experience.</li>
        <li>Achieved a more robust and reliable test suite by diagnosing and resolving issues in existing Cypress.js integration tests.</li>
        <li>Contributed to the core development process by actively implementing front-end changes, collaborating closely with both design and backend teams to ensure seamless user experience.</li>
      </ul>
      
      <h5>Learning & Personal Growth</h5>
      
      <ul>
        <li>Adopted best practices in version control by learning and applying Git Flow, enhancing team collaboration and code quality.</li>
        <li>Developed global communication skills by synchronizing with engineers across multiple time zones, enriching my understanding of distributed development processes.</li>
        <li>Specialized in front-end development, gaining hands-on experience with state-of-the-art frameworks and technologies.</li>
        <li>Expanded technical skillset by acquainting myself with Django, providing a solid foundation for full-stack development opportunities.</li>
      </ul>
        </div>
      </div>
    );
}
  
export default Exper;
