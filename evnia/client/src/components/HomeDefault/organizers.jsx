import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';

class Organisers extends React.Component {

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
                        <span>Organizing Committee</span>
                        <h2>People Behind this</h2>
                        <div className="bar"></div>
                        <LaxDiv text="Organisers" dataPreset="driftRight" />
                    </div>
                </div>

                <div className="row m-0">
                    {/*<div className="col-lg-3 col-sm-6 p-0">*/}
                    {/*    <div className="single-speakers">*/}
                    {/*        <img src={require("../../assets/images/organizing_committee/Mr.shital_agrawal.png")} alt="Speaker" />*/}

                    {/*        <div className="speakers-content">*/}
                    {/*            <h3><Link to="#">Mr. Shital Agrawal</Link></h3>*/}
                    {/*            <span>Chief Patron</span>*/}
                    {/*        </div>*/}
                    {/*        <ul>*/}
                    {/*            /!* <li>*/}
                    {/*                <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>*/}
                    {/*            </li> *!/*/}
                    {/*            <li>*/}
                    {/*                <a href="https://www.linkedin.com/in/shital-agrawal-9b6718199/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">*/}
                    {/*                    <i class="icofont-linkedin"></i>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-3 col-sm-6 p-0">*/}
                    {/*    <div className="single-speakers">*/}
                    {/*        <img src={require("../../assets/images/organizing_committee/Mr.janak khandwala.png")} alt="Speaker" />*/}

                    {/*        <div className="speakers-content">*/}
                    {/*            <h3><Link to="#">Mr. Janak Khandwala</Link></h3>*/}
                    {/*            <span>Chief Patron</span>*/}
                    {/*        </div>*/}
                    {/*        <ul>*/}
                    {/*            /!* <li>*/}
                    {/*                <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>*/}
                    {/*            </li> *!/*/}
                    {/*            <li>*/}
                    {/*                <a href="https://www.linkedin.com/in/janak-khandwala-6847161a1/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">*/}
                    {/*                    <i class="icofont-linkedin"></i>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-3 col-sm-6 p-0">*/}
                    {/*    <div className="single-speakers">*/}
                    {/*        <img src={require("../../assets/images/organizing_committee/dr-saurin-shah-vice-chancellor.webp")} alt="Speaker" />*/}

                    {/*        <div className="speakers-content">*/}
                    {/*            <h3><Link to="#">Dr. Saurin Shah </Link></h3>*/}
                    {/*            <span><b>Patron</b></span>*/}
                    {/*            <span>Provost, Silver Oak University</span>*/}
                    {/*        </div>*/}
                    {/*        <ul>*/}
                    {/*            /!* <li>*/}
                    {/*                <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>*/}
                    {/*            </li> *!/*/}
                    {/*            <li>*/}
                    {/*                <a href="https://www.linkedin.com/in/dr-saurin-shah/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">*/}
                    {/*                    <i class="icofont-linkedin"></i>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-lg-3 col-sm-6 p-0">*/}
                    {/*    <div className="single-speakers">*/}
                    {/*        <img src={require("../../assets/images/organizing_committee/Dr.pina bhatt.jpeg")} alt="Speaker" />*/}

                    {/*        <div className="speakers-content">*/}
                    {/*            <h3><Link to="#">Dr. Pina Bhatt</Link></h3>*/}
                    {/*            /!* <span><b>Patron</b></span> *!/*/}
                    {/*            <span>Vice Provost, Silver Oak University</span>*/}
                    {/*        </div>*/}
                    {/*        <ul>*/}
                    {/*            /!* <li>*/}
                    {/*                <Link to="https://www.facebook.com/" target="_blank" className="facebook"><i className="icofont-facebook"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://twitter.com/" target="_blank" className="twitter"><i className="icofont-twitter"></i></Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="https://www.instagram.com/" target="_blank" className="instagram"><i className="icofont-instagram"></i></Link>*/}
                    {/*            </li> *!/*/}
                    {/*            <li>*/}
                    {/*                <a href="https://www.linkedin.com/in/dr-pina-bhatt-1464487b/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">*/}
                    {/*                    <i class="icofont-linkedin"></i>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/chirag_paunwala.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Chirag Paunwala</Link></h3>
                                 <span><b>General Chair</b></span>
                                <span>Chairperson, IEEE SPS Chapter Gujarat Section; Vice-Chairperson, IEEE Gujrat Section</span>
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
                                    <a href="https://www.linkedin.com/in/cpaunwala/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/dr.arpan desai.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Arpan Desai</Link></h3>
                                 <span><b>Program Chair</b></span>
                                <span>IEEE Senior Member, Secretary at IEEE Signal Processing Society, Gujarat Section</span>
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
                                    <a href="https://www.linkedin.com/in/dr-arpan-desai-95490111/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/dr.mita paunwala.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Mita Paunwala </Link></h3>
                                 <span><b>Program Chair</b></span>
                                <span>Vice Chair IEEE SPS Gujarat Chapter</span>
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
                                    <a href="https://www.linkedin.com/in/dr-mita-paunwala-69467014/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/dr.manih khare.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Manish Khare</Link></h3>
                                 <span><b>Organizing Chairs</b></span>
                                <span>Assistant Professor at Dhirubhai Ambani Institute of Information and Communication Technology</span>
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
                                    <a href="https://www.linkedin.com/in/dr-manish-khare-bb177355/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/Satvik sir.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Dr. Satvik Khara</Link></h3>
                                                                 <span><b>Organizing Chairs</b></span>
                                <span>Senior Member IEEE; Founding Member, Silver Oak University IEEE Student Branch; Chairperson, SIGHT IEEE Gujarat Section; Secretary, Computer Society, IEEE Gujarat Sections</span>
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
                                    <a href="https://www.linkedin.com/in/satvik-khara/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/digant sir.jpeg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Prof. Digant Parmar</Link></h3>
                                                                 <span><b>Organizing Co-Chairs</b></span>
                                <span>Faculty Branch Counsellor,IEEE SOU SB</span>
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
                                    <a href="https://www.linkedin.com/in/digant-parmar-42792975/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/mayuresh_sir.jpg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Prof. Mayuresh Kulkarni</Link></h3>
                                                                                                 <span><b>Organizing Co-Chairs</b></span>
                                <span>Faculty Advisor IEEE SOU WIE AG; Faculty advisor IEEE SOU SPS SBG; IEEE SOU CS SBG</span>
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
                                    <a href="https://www.linkedin.com/in/mayuresh-kulkarni-5bb591102/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                   {/*  <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-speakers">
                            <img src={require("../../assets/images/organizing_committee/mehul_raval.jpg")} alt="Speaker" />

                            <div className="speakers-content">
                                <h3><Link to="#">Mr. Mehul Raval</Link></h3>
                                <span>Professor - Ahmedabad University</span>
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
                                    <a href="https://www.linkedin.com/in/mehulraval/" target="_blank" class="linkedin" title="My LinkedIn Profile" rel="noopener noreferrer">
                                        <i class="icofont-linkedin"></i>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div> */}

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

export default Organisers;