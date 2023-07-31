import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Venue Location</h3>
                                <span>
                                    <i className="icofont-calendar"></i> 25<sup>th</sup>-26<sup>th</sup> August, 2023
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> Silver Oak University,
                                    Sarkhej - Gandhinagar Hwy, Opp.
                                    Bhagwat Vidyapith, <br /> Gota,
                                    Ahmedabad, Gujarat 382481
                                </p>



                                <p className="contact">
                                    <i className="icofont-phone"></i> Contact Our Authority
                                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prof. Digant Parmar - <a href="mailto:digantparmar@ieee.org">digantparmar@ieee.org</a>
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Connect with us on social media</h3>

                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/IEEESilverOakUni?mibextid=LQQJ4d" className="facebook" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/IEEE_SilverOak?t=6kRosha9trv39oljXXI-AA&s=09" className="twitter" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/ieee-silveroakuni/" className="linkedin" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/ieee_silveroakuni?igshid=MzNlNGNkZWQ4Mg==" className="instagram" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <div className="logo">
                                    <Link to="/Netsip">
                                        <img src={require("../../assets/images/logo.png")} alt="logo" />
                                    </Link>
                                </div>
                                {/* <ul>
                                    <li><Link to="/blog-1">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="#">Sponsor</Link></li>
                                    <li><Link to="#">Venue</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul> */}
                                <p>
                                    Copyright <i className="icofont-copyright"></i> 2023 IEEE SOU SB. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;