import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skill from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skill />
      <Experience />
    </div>
  );
}

export default App;
