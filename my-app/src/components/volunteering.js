import React from 'react';
import '../App.css';

function Volunteering() {
    return (
        <div className='volunteer-box2'>
            <h2 style={{color:"#e7d8c9", fontSize:"28px"}}>Volunteering</h2>

            <div className="project">
                <h4>StreetCode, East Palo Alto</h4>
                <p className="project-date">March 2023 - June 2023</p>
                <ul>
                    <li>Empowered individuals with little to no technical background by introducing them to foundational tech skills</li>
                    <li>Implemented hands-on activities to enhance students' understanding and application of technical tools, thereby increasing their confidence in navigating the digital landscape.</li>
                    <li>Customized curriculum according to student interests, ensuring a tailored and engaging learning experience.</li>
                    <li>Provided individualized mentorship and guidance, fostering a supportive and inclusive learning environment.</li>
                    <li>Introduced students to essential skills such as web browser manipulation, email account management, and conducting independent research projects.</li>
                </ul>
            </div>

            <div className="project">
                <h4>Incarceration to College, BayArea</h4>
                <p className="project-date">June 2022 - March 2023</p>
                <ul>
                    <li>Engaged with incarcerated youth to introduce them to the opportunities and pathways available in the tech industry.</li>
                    <li> Shared personal experiences and insights into the tech industry, aiming to inspire and encourage participants to consider a career in technology.</li>
                    <li> Introduced basic Python programming concepts, guiding participants through the initial stages of coding and problem-solving.</li>
                </ul>
            </div>
        </div>
    );
}

export default Volunteering;
