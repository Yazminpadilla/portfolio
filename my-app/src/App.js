import './App.css';
import Header from './components/header.js';
import Introduction from './components/introduction';
import Sidebar from './components/sidebar';
import About from './components/about';
import Exper from './components/experience';
import Work from './components/work';
import Volunteering from './components/volunteering';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />
      <Introduction/>
      <div id="about" className="about-box">
        <About/>
      </div>
      <div id="experience" className="experience-box">
        <Exper/>
      </div>
      <div id="work" className="work-box">
        <Work/>
      </div>
      <div id="Volunteer" className='volunteer-box'>
        <Volunteering/>
      </div>
    </div>
  );
}

export default App;
