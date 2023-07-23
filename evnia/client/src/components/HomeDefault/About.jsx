import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
// import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {
    
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section className="about-area ptb-120 bg-image">
                
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About The Event</span>
                                <h2>We Create and <b>Turn</b> Into Reality</h2>
                                <p>NeTSiP is a IEEE Signal Processing Society initiative is aimed to provide an opportunity for students, faculties, scientists, and engineers to interact with leading researchers in communication, speech, biometrics, and image and signal processing areas.</p>
                                
                                <p>It includes invited talks from experts in these and related areas. Researchers in academic, government, and industrial organizations are encouraged to participate in the program.</p>

                               

                                <Link to="/about-1" className="btn btn-primary">Read More</Link>
                        
                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about" />

                                {/* <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about" /> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;