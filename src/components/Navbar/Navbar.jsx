import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from './Suren.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react';


const Navbar = () => {

const [menuOpen,setmenuOpen] = useState(false);


const changeIcon = () => {
 setmenuOpen(!menuOpen);

  
}

  return(
   
    
    <div className="navigation" >
    
      <div className="pages">
       
        <img src={Logo} alt="logo" id='logo'/>
        
        <Link to="/" className='nav-pages'>HOME</Link>
        <Link to="/about" className='nav-pages'>ABOUT</Link>
        <Link to="/projects" className='nav-pages'>PROJECTS</Link>
        <Link to="/contact" className='nav-pages'>CONTACT</Link>
        <div className="bar">

        
        <button id="menu-bar" onClick={changeIcon}>
          {menuOpen ?  <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBarsStaggered}/> }
          
          </button>
       
          {menuOpen &&(
          <nav className="menu">
          <ul className="open-menus">
            <li><Link to="/" className="open-menu-home">HOME</Link></li>
            <li><Link to="/about" className="open-menu-about">ABOUT</Link></li>
            <li><Link to="/projects" className="open-menu-projects">PROJECTS</Link></li>
            <li><Link to="/contact" className="open-menu-contact">CONTACT</Link></li>
          </ul>
        </nav>
          ) }
          
</div>
      </div>
    </div>
  
    
  
  );
};



export default Navbar; 