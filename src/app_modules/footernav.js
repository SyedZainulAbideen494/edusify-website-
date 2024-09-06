import React, { useState, useEffect } from 'react';
import { FaUsers, FaFlask, FaCalculator, FaStickyNote, FaCalendarAlt, FaBars, FaSignOutAlt, FaClock, FaMusic, FaStream, FaUser, FaSearch, FaGem, FaQuestionCircle } from 'react-icons/fa'; // Import FaGem for the diamond icon
import { HiBookOpen } from 'react-icons/hi';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiMaterialsScience } from 'react-icons/gi'; 
import { MdBusiness } from 'react-icons/md'; 
import './footer-nav.css';
import axios from 'axios';
import { API_ROUTES } from './apiRoutes';

const FooterNav = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post(API_ROUTES.userSessionAut, { token })
                .then(response => {
                    if (!response.data.valid) {
                        navigate('/login');
                    }
                })
                .catch(error => {
                    console.error('Token validation error:', error);
                    navigate('/login');
                });
        }
    }, [navigate]);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="footer-nav">
            {/* Primary Buttons */}
            <Link to='/planner' style={{ textDecoration: 'none' }}>
                <button className={`nav-btn-footer-nav ${location.pathname === '/planner' ? 'active' : ''}`}>
                    <HiBookOpen className="icon-footer-nav" />
                    <span className="btn-label">Planner</span>
                </button>
            </Link>
            <Link to='/groups' style={{ textDecoration: 'none' }}>
                <button className={`nav-btn-footer-nav ${location.pathname === '/groups' ? 'active' : ''}`}>
                    <FaUsers className="icon-footer-nav" />
                    <span className="btn-label">Groups</span>
                </button>
            </Link>
            <Link to='/notes' style={{ textDecoration: 'none' }}>
                <button className={`nav-btn-footer-nav ${location.pathname === '/notes' ? 'active' : ''}`}>
                    <FaStickyNote className="icon-footer-nav" />
                    <span className="btn-label">Notes</span>
                </button>
            </Link>
            <button className={`nav-btn-footer-nav ${isPopupVisible ? 'active' : ''}`} onClick={togglePopup}>
                <FaBars className="icon-footer-nav" />
                <span className="btn-label">More</span>
            </button>
            <div className={`popup-menu-footer-nav ${isPopupVisible ? 'show-footer-nav' : ''}`}>
                {/* Popup Buttons */}
             
                <Link to='/search' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/search' ? 'active' : ''}`}>
                        <FaSearch className="icon-footer-nav" />
                        <span className="btn-label">Search</span>
                    </button>
                </Link>
                <Link to='/math/solver' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/math/solver' ? 'active' : ''}`}>
                        <FaCalculator className="icon-footer-nav" />
                        <span className="btn-label">Math Solver</span>
                    </button>
                </Link>
                <Link to='/science/helper' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/science/helper' ? 'active' : ''}`}>
                        <GiMaterialsScience className="icon-footer-nav" />
                        <span className="btn-label">Science Helper</span>
                    </button>
                </Link>
                <Link to='/commerce/helper' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/commerce/helper' ? 'active' : ''}`}>
                        <MdBusiness className="icon-footer-nav" />
                        <span className="btn-label">Commerce Helper</span>
                    </button>
                </Link>
                <Link to='/quiz/home' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/quiz/home' ? 'active' : ''}`}>
                        <FaFlask className="icon-footer-nav" />
                        <span className="btn-label">Quizzes</span>
                    </button>
                </Link>
                <Link to='/calendar' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/calendar' ? 'active' : ''}`}>
                        <FaCalendarAlt className="icon-footer-nav" />
                        <span className="btn-label">Calendar</span>
                    </button>
                </Link>
                <Link to='/pomodoro' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/pomodoro' ? 'active' : ''}`}>
                        <FaClock className="icon-footer-nav" />
                        <span className="btn-label">Pomodoro</span>
                    </button>
                </Link>
                <Link to='/social-feed' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/social-feed' ? 'active' : ''}`}>
                        <FaStream className="icon-footer-nav" />
                        <span className="btn-label">Social Feed</span>
                    </button>
                </Link>
                <Link to='/profile' style={{ textDecoration: 'none' }}>
                    <button className={`nav-btn-footer-nav ${location.pathname === '/profile' ? 'active' : ''}`}>
                        <FaUser className="icon-footer-nav" />
                        <span className="btn-label">Profile</span>
                    </button>
                </Link>
                <Link to='/subscription' style={{ textDecoration: 'none' }}>  {/* Add the new Premium button */}
                <button className={`nav-btn-footer-nav ${location.pathname === '/subscription' ? 'active' : ''}`}>
                    <FaGem className="icon-footer-nav" />
                    <span className="btn-label">Premium</span>
                </button>
            </Link>
            <Link to='/help' style={{ textDecoration: 'none' }}>  {/* Add the new Premium button */}
                <button className={`nav-btn-footer-nav ${location.pathname === '/help' ? 'active' : ''}`}>
                    <FaQuestionCircle className="icon-footer-nav" />
                    <span className="btn-label">Help</span>
                </button>
            </Link>
                <button className="nav-btn-footer-nav" onClick={handleLogout}>
                    <FaSignOutAlt className="icon-footer-nav" />
                    <span className="btn-label">Logout</span>
                </button>
                <button className="close-btn-footer-nav" onClick={togglePopup}>×</button>
            </div>
        </div>
    );
};

export default FooterNav;