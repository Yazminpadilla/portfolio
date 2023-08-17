import './App.css';
import Header from './components/header.js';
import Introduction from './components/introduction';
import Sidebar from './components/sidebar';
import About from './components/about';
import Exper from './components/experience';
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />
      <Introduction/>
      <div id="about" className="about-box">
        <About/>
      </div>
      <Exper/>
    </div>
  );
}

export default App;
