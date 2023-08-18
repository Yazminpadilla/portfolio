import '../App.css';

function Work() {
    return (
        <div className='workbox2' id="Work">
            <h2 style={{color:"#e7d8c9", fontSize:"28px"}}>Work</h2>

            <div className="project">
                <h4>Website Portfolio</h4>
                <p className="project-date">August 2023</p>
                <a href="https://github.com/your_github_username/website_portfolio" className="project-link">View on GitHub</a>

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
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <a href="https://github.com/your_github_username/predictive_photoshopping" className="project-link">View on GitHub</a>

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
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <a href="https://github.com/your_github_username/task_together_app" className="project-link">View on GitHub</a>

                <ul>
                    <li>Collaboratively brainstormed app ideas and designed wireframes using Figma</li>
                    <li>Established a user database with Firebase</li>
                    <li>Initiated the construction of the app UI using React Native</li>
                </ul>
            </div>
        </div>
    );
}

export default Work;
