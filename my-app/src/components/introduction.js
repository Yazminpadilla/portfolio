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
            <h2>
            I build things for the web and animations.
            </h2>
            <h5 style={{ fontsize: "13px" }}>
            I am an ambitious junior software engineer with a passion for crafting outstanding applications. 
            Based in Oakland, California, I'm excitedly seeking full-time opportunities beginning January 2024, eager to bring my skills to innovative teams and projects.
            </h5>
        </div>
    </div>
    );
}
export default Introduction;