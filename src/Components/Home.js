import React from 'react';
import './Components.css';
import self from '../assets/self.jpg';

function Home() {
    return (
        <div className='container home-container'>
            <div className='home-sec1'>
                <h5>Hi there,</h5><br />
                <h1>I'm Rajendran Ramasamy</h1><br />
                <span>a passionate <b>Full Stack Developer...</b></span><br />
                <hr />
                <div className='home-btns'>
                    <button type="button" className="btn btn-warning">Contact Me</button>
                    <button type="button" className="btn btn-outline-warning">Download Resume</button>
                </div>
            </div>
            <div className='home-sec2'>
                <img className='self-image' src={self} alt="self" />
            </div>
        </div>
    )
}

export default Home