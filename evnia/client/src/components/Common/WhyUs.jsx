import React from 'react';
// import { Link } from 'react-router-dom';
 
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
                                        <img src={require("../../assets/images/SPS_logo.png")} className="why-us-image" alt="shape4" />

                                        </div>
                                        <h3>IEEE SPS</h3>
                                        
                                        <p>IEEE Signal Processing Society (SPS) is a prominent professional organization dedicated to advancing the theory and practice of signal processing, an interdisciplinary field that plays a vital role in a wide range of technological applications. As a society under the umbrella of the Institute of Electrical and Electronics Engineers (IEEE), SPS is at the forefront of shaping cutting-edge research, innovation, and advancements in signal processing.<pre> </pre></p>
            
                                        <a href="https://signalprocessingsociety.org/our-story/scope-mission" target='_blank' className="btn btn-primary">Read More</a>

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
                                        <p>IEEE Signal Processing Society Gujarat Section is a dynamic chapter of IEEE supporting dissemination of expertise through various events like AI, Computational Imaging, STTP and much more. Conceived to forge a formidable platform to provide a conducive milieu for its members, focused on signal processing methodologies, applications and guiding members towards lesser exposed sub-domains in the field with the intersection ofbiotechnology, entertainment, and social interactions.<pre></pre></p>
                                        
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
                                            <img src={require("../../assets/images/sps_sou.png")} alt="shape4" className="why-us-image"/>

                                        </div>
                                        <h3>SPS IEEE-SOU-SB</h3>

                                        <p>Silver Oak University IEEE Signal Processing Society is a dynamic platform dedicated to igniting technological innovation, fostering academic excellence, and empowering the signal processing community. Driven by a shared vision of advancing the frontiers of signal processing and nurturing a community of passionate individuals dedicated to shaping a brighter future.<pre>                   </pre><pre>                   </pre><pre>         </pre></p>
                                        
                                        <a href="https://ieee.socet.edu.in" target='_blank' className="btn btn-primary">Read More</a>
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
                                        <img src={require("../../assets/images/sou-logo.png")} className="why-us-image" alt="shape4" />

                                        </div>
                                        <h3>Silver Oak University</h3>

                                        <p>Silver Oak University is a distinguished institution renowned for its commitment to academic excellence and holistic education. As a reflection of its motto, “Gyanam Param Bhushanam” the university offers a diverse range of undergraduate and postgraduate programs, fostering and nurturing an environment that empowers students to explore their potential fully.<pre>                   </pre><pre>                   </pre><pre></pre></p>

                                          
                                        <a href="https://silveroakuni.ac.in/about" target='_blank' className="btn btn-primary">Read More</a>

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