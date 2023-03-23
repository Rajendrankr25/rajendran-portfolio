import React from 'react';
import './Components.css';
import phIcon from '../assets/phone.png';
import mlIcon from '../assets/mail.png';
import lnIcon from '../assets/linkedin.png';
import gitIcon from '../assets/git.png';

function Contact() {
    return (
        <div className='container-fluid contact-container'>
            <div className='container'>
                <br /><br />
                <h4>Contact Me</h4>
                <br /><br />
                <div className='contacts'>
                    <img src={phIcon} alt="phone" width={'25px'} />
                    <a href="tel:+919176227713">
                        <b>+91 9176227713</b>
                    </a>
                </div><br />
                <div className='contacts'>
                    <img src={mlIcon} alt="mail" width={'25px'} />
                    <a href="mailto:rajendrankr25@gmail.com">
                        <b>rajendrankr25@gmail.com</b>
                    </a>
                </div><br />
                <div className='contacts'>
                    <img src={lnIcon} alt="linkedin" width={'25px'} />
                    <a href="https://www.linkedin.com/in/rajendran-ramasamy-9471785a/" target={'_blank'}><b>Linkedin/Rajendran-Ramasamy</b></a>
                </div><br />
                <div className='contacts'>
                    <img src={gitIcon} alt="git" width={'25px'} />
                    <a href="https://github.com/Rajendrankr25" target={'blank'}><b>Github/Rajendran-Ramasamy</b></a>
                </div><br />
                <div>
                    <button type="button" class="btn btn-dark">Download Resume</button>
                </div><br /><br />
                <div style={{ textAlign: "center" }}>
                    Developed by "Rajendran Ramasamy"
                </div>
            </div>
            <br />
        </div>
    )
}

export default Contact