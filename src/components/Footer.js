import React from 'react';
import './Footer.css';
import Footerlogo from '../assets/footerlogo.svg'; // Replace with actual logo path
import PlayStore from '../assets/playstore.png'; // Replace with actual Play Store image path
import AppStore from '../assets/appstore.png'; // Replace with actual App Store image path
import InstagramIcon from '../assets/instagram.png'; // Replace with actual social media icon paths
import FacebookIcon from '../assets/facebook.png'; // Replace with actual social media icon paths
import LinkedInIcon from '../assets/linkdedin.png';
import Partner1 from '../assets/partner1.png';
import Partner2 from '../assets/partner2.png';
import Partner3 from '../assets/partner3.png';
import Partner4 from '../assets/partner4.png';
import Partner5 from '../assets/partner5.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                {/* First Row */}
                <div className='row mb-4'>
                    <div className='col-md-3'>
                        <img src={Footerlogo} alt='Logo' className='footer-logo' />
                    </div>
                    <div className='col-md-5'>
                        <p className='hr-update mb-2'>HR Updates, straight to your Inbox - Subscribe Today </p>
                        <div className='searchbar-container'>
    <input type='text' className='searchbar' placeholder='Search...' />
    <button className='search-button'>
        <span className='arrow'>&rarr;</span>
    </button>
</div>

                    </div>
                    <div className='col-md-4 text-center'>
                    <select className='language-switcher'>
                            <option value='en'>EN</option>
                            <option value='es'>SP</option>
                            <option value='fr'>FR</option>
                        </select>
                        <div className='social-media-icons mt-2'>
                            <a href='#' aria-label='Facebook'><img src={FacebookIcon} alt='Facebook' /></a>
                            <a href='#' aria-label='Instagram'><img src={InstagramIcon} alt='Twitter' /></a>
                            <a href='#' aria-label='LinkedIn'><img src={LinkedInIcon} alt='LinkedIn' /></a>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className='row mb-4 mt-5'>
                    <div className='col-md-3'>
                        <h5>Products</h5>
                        <ul>
                            <li><a href='#'>Core HR</a></li>
                            <li><a href='#'>Employee Management</a></li>
                            <li><a href='#'>Leave Management</a></li>
                            <li><a href='#'>Time & Attendance </a></li>
                            <li><a href='#'>Payroll Management </a></li>
                            <li><a href='#'>People Analytics</a></li>
                            <li><a href='#'>Recruitment</a></li>
                            <li><a href='#'>Performance Management <sup>COMING SOON</sup></a></li>

                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Resources</h5>
                        <ul>
                            <li><a href='#'>All Resources</a></li>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Case Studies</a></li>
                            <li><a href='#'>Product Videos</a></li>
                            <li><a href='#'>HR Glossary</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Platform</h5>
                        <ul>
                            <li><a href='#'>Log In</a></li>
                            <li><a href='#'>Schedule a Demo</a></li>
                            <li><a href='#'>Use Cases</a></li>
                            <li><a href='#'>Integrations</a></li>
                            <li><a href='#'>Pricing</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h5>Mobile App</h5>
                        <a href='#'><img src={PlayStore} alt='Google Play Store' className='app-store-icon' /></a>
                        <a href='#'><img src={AppStore} alt='Apple App Store' className='app-store-icon' /></a>
                    </div>
                </div>

                {/* Third Row */}
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <div className='partners'>
                            {/* Add partner images here */}
                            <img src={Partner1} alt='Partner 1' />
                            <img  src={Partner2} alt='Partner 2' />
                            <img  src={Partner3} alt='Partner 3' />
                            <img  src={Partner4} alt='Partner 4' />
                            <img  src={Partner5} alt='Partner 5' />
                        </div>
                    </div>
                </div>

                {/* Fourth Row */}
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='footer-links'>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms of Use</a>
                            <a href='#'>Cookie Policy</a>
                        </div>
                        <p className='copyright'>
                            Copyright © 2024 KPI Group. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
