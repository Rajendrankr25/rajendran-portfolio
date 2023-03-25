import React from 'react';
import './Components.css';
import mern from '../assets/mern1.png';

function About() {
    return (
        <div className='container'>
            <hr /><br />
            <h4>About me</h4>
            <br /><br />
            <div className='about-container'>
                <div>
                    <p>
                        Hi there, I'm Rajendran Ramasamy a passionate Full Stack Web Developer from Coimbatore, India.

                    </p>
                    <p>
                        I have over 7+ years of work experience in Project Management, Administration, Accounts and worked
                        different locations in India & Saudi Arabia.
                    </p>
                    <br /><br />
                    <h5>Certification</h5><br />
                    <p>Full Stack Web Developer - MERN</p>
                    <p>Institute : Guvi Geeks Network Pvt Ltd</p>
                    <p>Year : 2023</p>
                </div>
                <div>
                    <img src={mern} alt="about" className='about-pic' />
                </div>
            </div><br /><br />
        </div>
    )
}

export default About