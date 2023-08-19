import '../App.css';

function Work() {
    return (
        <div className='workbox2' id="Work">
            <h2 style={{color:"#e7d8c9", fontSize:"28px"}}>Work</h2>

            <div className="project">
                <h4>Website Portfolio</h4>
                <p className="project-date">August 2023</p>
                <a href="https://github.com/Yazminpadilla/portfolio/tree/main/my-app/src" className="project-link">View on GitHub</a>

                <ul>
                    <li>Conceptualized and executed the design of this personal website portfolio</li>
                    <li>Implemented responsive layouts, dynamic content rendering, and smooth scroll navigation</li>
                    <li>Utilized React.js for frontend development and integrated with various third-party libraries and APIs</li>
                </ul>
            </div>

            <div className="project">
                <h4>Predictive Photoshopping, Stanford, CA</h4>
                <p className="project-date">Project Team Member - June 2023</p>
                <div className="video-container">
                    <iframe 
                        src="https://drive.google.com/file/d/1mf66sg9YL74-5S_xkslw-hKf9u9azxQX/preview" 
                        width="640" 
                        height="480">
                    </iframe>
                </div>

                <a href="https://github.com/yazminpa/CS348K-Group-Project" className="project-link">View on GitHub</a>

                <ul>
                <li>Collaborated in a team of 4 to create a layer-based photo editing web application</li>
                    <li>Incorporated a segmentation model and a diffusion model into the application to allow users to edit images with precision</li>
                    <li>Utilized Flask, JavaScript, HTML, and CSS to build the web platform, integrating machine learning capabilities for advanced image editing</li>
                    <li>Implemented user-friendly UI, including page routing, image saving, and an interface for editing image attributes such as color, brightness, contrast, and hue</li>
                </ul>
            </div>

            <div className="project">
                <h4>Task Together App, Stanford, CA</h4>
                <p className="project-date">Project Team Member - January 2023 - April 2023</p>
                <div className="video-container">
                    <iframe 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                        width="800" 
                        height="450" 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZ8CiPZHc72QWY8thirE99s%2FTask-Together-(Wireframes)%3Fnode-id%3D1-15%26starting-point-node-id%3D1%253A15%26mode%3Ddesign%26t%3DX7ESlJ9hymiq1osl-1" 
                        allowFullScreen
                        title="Task Together App Wireframe">  
                    </iframe>
                </div>
                <a href="https://github.com/Yazminpadilla/VSTaskTogether/blob/main/screens/ProfileScreen.js" className="project-link">View on GitHub</a>

                <ul>
                    
        
                    <li>Collaboratively brainstormed and converted abstract ideas into tangible wireframes using Figma, paving the foundation for a user-centric interface.</li>
                    <li>Spearheaded the construction of the app UI utilizing React Native, achieving responsive performance and intuitive user interaction.</li>
                    <li>Integrated real-time profile retrieval and update functions using Firestore's onSnapshot, ensuring users see the latest profile information seamlessly.</li>
                    <li>Crafted a dynamic and interactive user profile interface that comprises profile images, personal details, Venmo integration, and an about section, ensuring users have a comprehensive view.</li>
                    <li>Enhanced the user experience by incorporating React Native Paper for contextual menus, providing users with easy profile editing and sign-out options.</li>
                    <li>Utilized vector icons from 'react-native-vector-icons' to provide clear and attractive visual cues, improving user navigation and understanding.</li>
                </ul>
            </div>
        </div>
    );
}

export default Work;
