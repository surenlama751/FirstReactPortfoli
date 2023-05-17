

import NavBar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar/>
      
      
      <Routes>
      

        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>

      </BrowserRouter>
      </div>
    
 )
 };

export default App;
