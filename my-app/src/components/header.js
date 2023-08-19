import '../App.css';

function Header() {
    return (
        <h1 className="Header">
            <ul className="headerList">
                <li><a href="#about"><span className="headerNumber">01.</span> <span className="headerWord">About</span></a></li>
                <li><a href="#experience"><span className="headerNumber">02.</span> <span className="headerWord">Experience</span></a></li>
                <li><a href="#Work"><span className="headerNumber">03.</span> <span className="headerWord">Work</span></a></li>
                {/* <li><a href="#Contact"><span className="headerNumber">04.</span> <span className="headerWord">Contact</span></a></li> */}
            </ul>
        </h1>
    );
}

export default Header;
