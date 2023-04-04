import React from 'react';
import './Components.css';
import self from '../assets/self.jpg';
import About from './About';
import Skill from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import ContactModal from './ContactModal';
import Projects from './Projects';

function Home() {
    return (
        <div>
            <div className='container home-container'>
                <div className='home-sec1'>
                    <h5>Hi there,</h5><br />
                    <h1>I'm Rajendran Ramasamy</h1><br />
                    <span><b>Full Stack Developer...</b></span><br />
                    <hr />
                    <div className='home-btns'>
                        <ContactModal />
                        {/* <button type="button" className="btn btn-warning">Contact Me</button> */}
                        <a href="https://drive.google.com/file/d/1aSHTtF0AVPT7lTU4tIZU_U1kk0IvI4Ez/view?usp=sharing" target='blank'>
                            <button type="button" className="btn btn-outline-warning">Download Resume</button>
                        </a>
                    </div>
                </div>
                <div className='home-sec2'>
                    <img className='self-image' src={self} alt="self" />
                </div>
            </div>
            <About />
            <Skill />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home