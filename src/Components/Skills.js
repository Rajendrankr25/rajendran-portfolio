import React from 'react';
import './Components.css';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import bsIcon from '../assets/bootstrap.png';
import domIcon from '../assets/dom.png';
import mongoIcon from '../assets/mongodb.png';
import exIcon from '../assets/express.png';
import nodeIcon from '../assets/node.png';
import awsIcon from '../assets/aws.png';
import vsIcon from '../assets/vsCode.png';
import gitIcon from '../assets/git.png';
import muiIcon from '../assets/mui.png';
import ntlfyIcon from '../assets/netlify.png';
import postIcon from '../assets/postman.png';

function Skill() {

    const skillList = [{
        "icon": htmlIcon,
        "skill": "HTML"
    }, {
        "icon": cssIcon,
        "skill": "CSS"
    }, {
        "icon": jsIcon,
        "skill": "Javascript"
    }, {
        "icon": reactIcon,
        "skill": "React.JS"
    }, {
        "icon": domIcon,
        "skill": "DOM"
    }, {
        "icon": mongoIcon,
        "skill": "MongoDB"
    }, {
        "icon": exIcon,
        "skill": "Express.JS"
    }, {
        "icon": nodeIcon,
        "skill": "Node.JS"
    }, {
        "icon": awsIcon,
        "skill": "AWS"
    }, {
        "icon": bsIcon,
        "skill": "Bootstrap"
    }, {
        "icon": muiIcon,
        "skill": "Material-UI"
    }, {
        "icon": vsIcon,
        "skill": "VSCode"
    }, {
        "icon": gitIcon,
        "skill": "Github"
    }, {
        "icon": ntlfyIcon,
        "skill": "Netlify"
    }, {
        "icon": postIcon,
        "skill": "Postman"
    }];

    return (
        <div className='container'>
            <hr /><br />
            <h4>Skills</h4>
            <br /><br />
            <div className='skills-icons'>
                {skillList.map((data, index) => (
                    <Skills key={index} data={data} />
                ))}
            </div>
            <br /><br />
        </div>
    )
}

function Skills({ data }) {
    return (
        <div className='card'>
            <div className='tech-icons'>
                <img src={data.icon} alt="icon" />
                <span>{data.skill}</span>
            </div>
        </div>
    )
}

export default Skill