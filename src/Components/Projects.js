import React from 'react';
import '../Components/Components.css';
import gmail from '../assets/gmailClone.png';
import movie from '../assets/movieApp.png';

function Projects() {
    return (
        <div className='container'>
            <hr /><br />
            <h4>Projects</h4>
            <br /><br />
            <div className='projects-container'>
                <div className='card' style={{ width: '35rem' }}>
                    <img src={gmail} className="card-img-top" alt="project" />
                    <div className='card-body'>
                        <h5>Gmail Clone</h5><br />
                        <p><b>Front-end : </b>ReactJS</p>
                        <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
                        <p>
                            <b>Front-end Source Code : </b>
                            <a href="https://github.com/Rajendrankr25/capstone-gmail-clone-frontend" target='blank'>Github/GmailClone/Frontend</a>
                        </p>
                        <p>
                            <b>Back-end Source Code : </b>
                            <a href="https://github.com/Rajendrankr25/capstone-gmail-clone-backend" target='blank'>Github/GmailClone/Backend</a>
                        </p>
                    </div>
                </div>
                <div className='card' style={{ width: '35rem' }}>
                    <img src={movie} className="card-img-top" alt="project" />
                    <div className='card-body'>
                        <h5>Movie App</h5><br />
                        <p><b>Front-end : </b>ReactJS</p>
                        <p><b>Back-end : </b> NodeJS, Express, MongoDB</p>
                        <p>
                            <b>Front-end Source Code : </b>
                            <a href="https://github.com/Rajendrankr25/rjs-day2-sessiontask" target='blank'>Github/MovieApp/Frontend</a>
                        </p>
                        <p>
                            <b>Back-end Source Code : </b>
                            <a href="https://github.com/Rajendrankr25/MongoDB-Node-Express" target='blank'>Github/MovieApp/Backend</a>
                        </p>
                    </div>
                </div>
            </div><br />
        </div>
    )
}

export default Projects