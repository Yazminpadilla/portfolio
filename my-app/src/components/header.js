import '../App.css';

function Header() {
    return (
        <h1 className="Header">
            <ul className="headerList">
                <li><span className="headerNumber">01.</span> <span className="headerWord">About</span></li>
                <li><span className="headerNumber">02.</span> <span className="headerWord">Experience</span></li>
                <li><span className="headerNumber">03.</span> <span className="headerWord">Work</span></li>
                <li><span className="headerNumber">04.</span> <span className="headerWord">Contact</span></li>
            </ul>
        </h1>
    );
}

export default Header;
