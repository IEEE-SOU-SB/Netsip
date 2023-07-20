import React from 'react';
import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/sou-logo.png")} className="why-us-image" alt="shape4" />

                                        </div>
                                        <h3>Silver Oak University</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                          
                                        <a href="https://www.silveroakuni.ac.in/about" target='_blank' className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <img src={require("../../assets/images/sps_sou.png")} alt="shape4" className="why-us-image"/>

                                        </div>
                                        <h3>SPS IEEE-SOU-SB</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
                                        <a href="https://ieee.socet.edu.in/about-socet-sb/" target='_blank' className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/sps-gujarat-section.png")} className="why-us-image" alt="shape4" />

                                        </div>
                                        <h3>SPS Gujarat Section</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
                                        <a href="https://ieeespsgs.org/" target='_blank' className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/SPS_logo.png")} className="why-us-image" alt="shape4" />

                                        </div>
                                        <h3>IEEE SPS</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
            
                                        <a href="https://signalprocessingsociety.org/our-story/scope-mission" target='_blank' className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className='slideshow'>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </section>
        );
    }
}
 
export default WhyUs;