import React from 'react';
import './Components.css';
import workIcon from '../assets/workIcon.jpg';
import workIcon1 from '../assets/workIcon1.jpg';
import workIcon3 from '../assets/workIcon3.jpg';
import fsd1 from '../assets/FSD1.png';

function Experience() {
    return (
        <div className='container'>
            <hr /><br />
            <h4>Work Experience</h4>
            <br /><br />
            <div className='exp-container'>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={fsd1} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>September 2022 to Present</h5><br />
                        <p><b>Full Stack Developer ['MERN']</b></p>
                        <p><b>Institute:</b> Guvi Geeks Network Pvt Ltd</p>
                        <p><b>Role:</b> Student Trainee</p>
                        <p><b>Location:</b> Remote</p>
                    </div>
                </div>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={workIcon} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>July 2019 to April 2021 - Project Accountant</h5><br />
                        <p>Larsen & Toubro Ltd</p>
                        <p><b>Project:</b> 220kV MCMV Kottayam Transmission Lines</p>
                        <p><b>Client:</b> Kerala State Electricity Board Limited (KSEB)</p>
                        <p><b>Location:</b> Kottayam, Kerala, India</p>
                    </div>
                </div>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={workIcon1} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>April 2018 to June 2019 - Asst. Project Accountant</h5><br />
                        <p>Larsen & Toubro Saudi Arabia LLC</p>
                        <p><b>Project:</b> 380kV Switching Station and UG cabling</p>
                        <p><b>Client:</b> Saudi Electricity Company (SEC)</p>
                        <p><b>Location:</b> Riyadh, Saudi Arabia</p>
                    </div>
                </div>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={workIcon1} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>August 2017 to March 2018 - Asst. Project Accountant</h5><br />
                        <p>Larsen & Toubro Saudi Arabia LLC</p>
                        <p><b>Project:</b> SEC T1 Substations</p>
                        <p><b>Client:</b> Saudi Electricity Company (SEC)</p>
                        <p><b>Location:</b> Riyadh, Saudi Arabia</p>
                    </div>
                </div>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={workIcon} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>October 2014 to July 2017 - Asst. Project Accountant</h5><br />
                        <p>Larsen & Toubro Saudi Arabia LLC</p>
                        <p><b>Project:</b> 132kV Wadi Al-Dawasir Overhead Transmission Line</p>
                        <p><b>Client:</b> Saudi Electricity Company (SEC)</p>
                        <p><b>Location:</b> Wadi Al-Dawasir, Saudi Arabia</p>
                    </div>
                </div>
                <div className='card' style={{ width: '25rem' }}>
                    <img src={workIcon3} className="card-img-top" alt="work" />
                    <div className='card-body'>
                        <h5>July 2013 to September 2014 - Graduate Commercial Trainee</h5><br />
                        <p>Larsen & Toubro Ltd</p>
                        <p><b>Project:</b> Chennai HQ & Chennai Regional Office (Project Coordination)</p>
                        <p><b>Location:</b> Chennai, TN, India</p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Experience