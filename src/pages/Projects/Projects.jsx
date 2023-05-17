import './Projects.css';
import { Link } from 'react-router-dom';
import Rockpaperscissor from './rockpaperscissors.png';
import Calculator from './calculator.png';
import Firstportfolio from './firstportfolio.png';
const Projects = () => {
  return(
    <div className="project-page">
      <div className="project-heading">
        <p id="project-heading1">
          PROJECTS
        </p>
        </div>
        <div className="projects">
          <div className="rockpaperscissors-project">
            <img src={Rockpaperscissor} id="first-project"/>
        <Link to='/rockpaperscissors' id="first-link">1. RockPaperScissors Project</Link>
        
        </div>
        <div className="calculator-project">
            <img src={Calculator} id="second-project"/>
        <Link to='/calculator' id="second-link">2. Calculator Project</Link>
        
        </div>
        <div className="firstportfolio-project">
            <img src={Firstportfolio} id="third-project"/>
        <Link to='/firstportfolio'id="third-link">3. FirstPortFolio Project</Link>
        
        </div>
        
        </div>
      
    </div>
  );
};
export default Projects;