import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css';

function Navbar() {

    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md" style={{ backgroundColor: 'gold' }}>
                <div className="container navItems">
                    <div>
                        <span className="navbar-brand navbar-name links"
                            onClick={() => navigate('/')}
                        >Rajendran Ramasamy</span>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <span className='nav-link active links'
                                    onClick={() => navigate('/')}
                                >Home</span>
                                {/* <span className='nav-link active'
                                    onClick={() => navigate('/about')}
                                >About</span>
                                <span className='nav-link active'>Skills</span>
                                <span className='nav-link active'>Projects</span>
                                <span className='nav-link active'>Experience</span> */}
                                <span className='nav-link active links'
                                    onClick={() => navigate('/contact')}
                                >Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar