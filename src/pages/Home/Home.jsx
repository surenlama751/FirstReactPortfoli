import './Home.css';
import MyImage from './main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Projects from '../Projects/Projects';
import { useNavigate } from 'react-router-dom';

import React from 'react';


const Home = () => {
  const navigate = useNavigate();
  const takeitto = () => {
    navigate('/projects')
  }
  return(
  

    <div className="main">
    
      <div className="first-greeting">
    <p id="greeting">Hello</p>
    </div>
    <div className="name">
      <p id="name-info">I'm <span style={{color:'#EEBB52'}}> Suren </span> Lama</p>
    </div>
    <div className="info">
      <p id="information">This is Suren Lama Web Developer. My portfolio is an essential tool for showcasing my skills and expertise. I strive to highlight my best work and demonstrate my proficiency with the latest technologies and programming languages. I prioritize creating a user-friendly portfolio that is easy to navigate, with a responsive design optimized for viewing on all devices. In addition to showcasing my projects, I provide context for each one, explaining the challenges I faced and how I overcame them </p>
    </div>
    <div className="image">
      <img src={MyImage} id="main-image" alt="Main"/>
    </div>
   
    <div className="button" >
      <button id="projects"onClick={takeitto}>PROJECTS</button>
      
    </div>
    <div className="socio">
       
    <a href="https://www.facebook.com/suren.ghising.56/"><div className="facebook">
        <FontAwesomeIcon icon={faFacebook}/></div> </a>
        <a href="https://www.instagram.com/surenghising/https://www.linkedin.com/in/surenlama751/"><div className="instagram">
       <FontAwesomeIcon icon={faInstagram}/>
        </div> </a>
        <a href="https://www.linkedin.com/in/surenlama751/"> <div className="linkedin">
      <FontAwesomeIcon icon={faLinkedin}/>
       </div></a>
       <a href="https://twitter.com/surenlama751"><div className="twitter">
       <FontAwesomeIcon icon={faTwitter}/></div> </a>
       
      </div>
      </div>
    
)
  }

export default Home;

