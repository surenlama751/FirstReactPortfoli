import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Contact = () => {


  const navigate = useNavigate();
  const buttonResume = () =>{
    navigate('/resume');
  }
  return(
   
    

    <div className="contact-form">
      <div className="cv">
       <button id="resume-btn" onClick={buttonResume}><FontAwesomeIcon icon={faFolderOpen} id="resume"/></button>
      </div>
      <form className="main-form">
<p id="getintouch">Get In Touch</p>
<p id="information-contact">Please feel free to contact me for more information.</p>
<span id="full-name12">Name*</span>
<br/>
<input type="text" id="fname12"/>
<input type="text" id="lname12"/><br/>
<span id="first-name">First Name</span>
<span id="last-name">Last Name</span><br/>
<input type="text" id="contact-number"/><br/>
<span id="numberforcontact">Contact Number</span>
<span id="message-field">Message*</span><br/>
<textarea id="anytext"></textarea><br/>
<input type="submit" id="submit-value" value="CONTACT" />

</form>
</div>

  );
}
export default Contact;