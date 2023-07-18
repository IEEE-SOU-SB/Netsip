import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss'; // If you want to use the default styles for the modal video
import mainVideo from '../../assets/images/main-bg.mp4'; // Replace 'main-video.mp4' with the actual video file path
import Video from '../../assets/images/main-bg-two.mp4'; // Replace 'main-video.mp4' with the actual video file path
import Videonew from '../../assets/images/main-bg-new.mp4'; // Replace 'main-video.mp4' with the actual video file path

class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us">



                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">

                        <div className="single-box">
                              <div className="video-container">
            <video autoPlay muted loop className="video-background">
              <source src={mainVideo} type="video/mp4" />
              {/* Add additional source tags for other video formats (e.g., WebM, Ogg) if needed */}
              Your browser does not support the video tag.
            </video>
          </div>

                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/sou-logo.png")} alt="shape4" />

                                        </div>
                                        <h3>Silver Oak University</h3>
                                        <p>Silver Oak University(SOU) is the best premier private university in Gujarat, India carrying forward the legacy of the Silver Oak Group of Institutes.</p>
                                          
                                        <a href="https://www.silveroakuni.ac.in/about" target='_blank' className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">

                              <div className="video-container">
            <video autoPlay muted loop className="video-background">
              <source src={Video} type="video/mp4" />
              {/* Add additional source tags for other video formats (e.g., WebM, Ogg) if needed */}
              Your browser does not support the video tag.
            </video>
          </div>

                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <img src={require("../../assets/images/sps_sou.png")} alt="shape4" />

                                        </div>
                                        <h3>IEEE SPS SOU SBC</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
                                        <a href="https://ieee.socet.edu.in/about-socet-sb/" target='_blank' className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">

                              <div className="video-container">
            <video autoPlay muted loop className="video-background">
              <source src={mainVideo} type="video/mp4" />
              {/* Add additional source tags for other video formats (e.g., WebM, Ogg) if needed */}
              Your browser does not support the video tag.
            </video>
          </div>

                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/sps-gujarat-section.png")} alt="shape4" />

                                        </div>
                                        <h3>IEEE SPS GS</h3>
                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        
                                        <a href="https://ieeespsgs.org/" target='_blank' className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">

                              <div className="video-container">
            <video autoPlay muted loop className="video-background">
              <source src={Videonew} type="video/mp4" />
              {/* Add additional source tags for other video formats (e.g., WebM, Ogg) if needed */}
              Your browser does not support the video tag.
            </video>
          </div>

                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                        <img src={require("../../assets/images/SPS_logo.png")} alt="shape4" />

                                        </div>
                                        <h3>IEEE SPS</h3>
                                        <p>The IEEE's first society, the Signal Processing Society is the world's premier professional society for signal processing scientists and professionals.</p>
                                        
            
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