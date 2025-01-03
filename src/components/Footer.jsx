import React from 'react'
import Logo from '../assets/logo-2.png'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            <footer className="footer">

                <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>

                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <a className="footer-logo-link" href="#">
                                <img src={Logo} alt="logo" />

                            </a>

                        </div>
                        <div className="footer-menu">
                            <p className="address">Sant Barhanpure Nagar, Sewagram Road,<br />
                                Mandgaon Tah. Samudrapur Dist.Wardha - 442102</p>

                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Related Links</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://nagpuruniversity.ac.in/" target='_blank'>Nagpur University</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href="https://nagpuruniversity.ac.in/index.php/Contentpage/index/RWY4MW91bGFWdjVRWXc9PQ%3D%3D/en" target='_blank'>New Syllabus of Commerce</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://www.nagpuruniversity.ac.in/pdf/Student_Aid_Form_2020-21_22032021.pdf" target='_blank'>Student Aid Fund Form</a>
                                </li>

                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://rtmnuresults.org/" target='_blank'>Results Link</a>
                                </li>


                            </ul>
                        </div>

                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Quick Links</h2>
                            <ul id="menu-quick-links" className="footer-menu-list">
                                <Link to='/'>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                        Home
                                    </li>
                                </Link>
                                <Link to='/about'>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    About
                                </li></Link>
                                <Link to='/acedemics'>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    Courses
                                </li></Link>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm">Take Admission</a>
                                </li>
                                <Link to='/gallery'>
                                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                    Photo Gallery</li></Link>
                                    <Link to='/contact'>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    Contact
                                </li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                            <p className="footer-call-to-action-description"> Have a support question?</p>
                            <button className="footer-call-to-action-button "> Get in Touch </button>
                        </div>
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Call Us On</h2>
                            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:07387758523" target="_self"> 07387758523 </a></p>
                        </div>
                    </div>

                </div>
                <hr />

                <div className="footer-end">
                    <p>Designed and Developed by ©HD Web Services</p>
                    <p>All CopyRights Reserved</p>
                </div>

            </footer >

        </>
    )
}

export default Footer
