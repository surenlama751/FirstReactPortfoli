import MyImage from './1.png';
import './About.css';
import {useNavigate} from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const taketocontact = () =>{
    navigate('/contact');
  }
return(
  

  <div ClassName="container">
    <div className="image1">
    <img src={MyImage} alt="Desktop Computer" id="main-image1"/>
    </div>
    <div className="role-name1">
      <p id="role1">WEB DEVELOPER</p>
    </div>
    <div className="main-info1">
      <p id="info1">A developer who thinks "multi-discipilnary" is a buzzword and wonders why we write bios in third person.</p>
    </div>
    <div className="information1">
      <p id="role-info1">AKA Suren, I am a software developer in Sydney, Australia. I build anything from mobile to web app. Feel free to say hi.</p>
    </div>
    <div className="button1">
      <button id="btn" onClick={taketocontact}>Let's Talk</button>
    </div>
  </div>
);
};

export default About;