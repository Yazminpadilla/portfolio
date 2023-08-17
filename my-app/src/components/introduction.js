import '../App.css';
function Introduction(){
    return(
    <div className="intro-box">
        <h3 className="introHi">
            Hi, my name is
        </h3>
        <h1 className="name">
         Yazmin Padilla-Alvarez.
        </h1>
        <div className="intro-bio">
            <h2 style={{color:"#e7d8c9"}}>
                Junior Software Engineer
            </h2>
            <h5 style={{ fontsize: "17px" }}>
            An ambitious junior software engineer with a passion for building accessible, inclusive products and digital experiences for the web. 
            Based in Oakland, California, I'm excitedly seeking full-time opportunities beginning January 2024, eager to bring my skills to innovative teams and projects.
            </h5>
        </div>
    </div>
    );
}
export default Introduction;