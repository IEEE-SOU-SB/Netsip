import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';

class Speakers extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render() {
        return (
            <section className="speakers-area ptb-120 pb-0">
                <div className="container">
                    <div className="section-title">
                        <span>Listen to the Event Speakers</span>
                        <h2>Who's Speaking</h2>
                        <div className="bar"></div>
                        <LaxDiv text="Speakers" dataPreset="driftRight" />
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Mahesh.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Mahesh Anand.S</Link></h3>
                                <span>Data Science & AI Educator</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/mahesh-anand-s-a5ba299/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Angshul.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Angshul Majumdar</Link></h3>
                                <span>Co-Founder ShikshAI Inc</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/angshul-majumdar-b388761ab/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Nalin.jpg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Nalin Sharma </Link></h3>
                                <span>Assistant Professor at ABV-IIITM, Gwalior</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/nalin-kumar-sharma-68a20891/?originalSubdomain=in" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Jyotika.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Ms. Jyotika Athawale</Link></h3>
                                <span>Director - RAS Architecture (R&D)</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/jyotika-athavale-460b383/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Harshal.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Harshal Oza</Link></h3>
                                <span>Co-Founder - APTRaise Technologies</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/harshaloza/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/Tapas.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Tapas Kumar Maiti</Link></h3>
                                <span>Associate Professor - DAIICT, Gandhinagar</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/tapas-maiti/?originalSubdomain=in" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/mehul_raval.jpg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Mr. Mehul Raval</Link></h3>
                                <span>Professor - Ahmedabad University</span>
                            </div>
                            <ul>
                                {/* <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/mehulraval/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*<div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/speakers8.jpg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">David Wiley</Link></h3>
                                <span>Senio Visual Designer</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/" target="_blank" className="linkedin"><i className="icofont-linkedin"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>*/}
                </div>
            </section>
        );
    }
}

export default Speakers;