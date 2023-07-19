import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import spsGujaratSection from '../../assets/images/IEEE SPS GS Logo.png';
import spsLogo from '../../assets/images/SPS_logo.png';
import spsSou from '../../assets/images/IEEE SPS SOU SBC - Full Color.png';
import sou from '../../assets/images/IEEE New Logo- Blue (2).png';
import ieee_gs from '../../assets/images/IEEE Gujarat Section Logo.png';
import '../../assets/css/Header.css'
import 'react-modal-video/scss/modal-video.scss'; // If you want to use the default styles for the modal video
import mainVideo from '../../assets/images/main-bg.mp4'; // Replace 'main-video.mp4' with the actual video file path


class MainBanner extends React.Component {

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    }

    makeTimer = () => {
        let endTime = new Date("August 23 2023 10:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.makeTimer();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render(){
        return (
            <React.Fragment>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='cRXm1p-CNyk' 
                    onClose={() => this.setState({isOpen: false})} 
                />


                <div className="main-banner item-bg1">

                    <div className="video-container">
            <video autoPlay muted loop className="video-background">
              <source src={mainVideo} type="video/mp4" />
              {/* Add additional source tags for other video formats (e.g., WebM, Ogg) if needed */}
              Your browser does not support the video tag.
            </video>
          </div>


                    <div className="d-table">



                        <div className="d-table-cell">

                                 <header className="header">
  <div className="header__container"> {/* New container div */}
    <div className="header__logo">
      <div className="logo-container">
<img src={spsGujaratSection} alt="SPS Gujarat Section" style={{ marginLeft: '60px' }} />
        <img src={ieee_gs} alt="IEEE GS" style={{ height: '110px' }}/>
        {/*<img src={spsLogo} alt="SPS Logo" />*/}
<img src={sou} alt="Sou SB" style={{ width: '600px', height: '70px' }} />
        <img src={spsSou} alt="SPS Sou" style={{ marginLeft: '40px' }} />
      </div>
    </div>
  </div>
</header>
                            <div className="container">

                                <div className="main-banner-content">



                                    {/*<p>Are you <span>ready</span> to attend?</p>*/}
                                    <h1>NeTSiP <b>2</b><b>0</b><b>2</b><b>3</b> <br />International<br /> Flagship Event <br /> Of IEEE SPS GS</h1>

                                    <ul>
                                        <li><i className="icofont-compass"></i> Silver Oak University, Ahmedabad</li>
                                        <li><i className="icofont-calendar"></i> 25<sup>th</sup>-26<sup>th</sup> August, 2023</li>
                                    </ul>

                                    <div className="button-box">
                                        {/*<Link to="#" className="btn btn-primary">Register Now!</Link>*/}
                                
                                        <Link 
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            to="#" 
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="icofont-ui-play"></i> Watch Promo Video
                                        </Link>


                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="event-countdown countdown1">
                        
                   
                        <div id="timer">
                            <div id="days">{this.state.days} <span>Days</span></div>
                            <div id="hours">{this.state.hours} <span>Hours</span></div>
                            <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                            <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                        </div>
                        
                        
                    </div>
                    
                    <div className="shape1">
                        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
                    </div>

                    <div className="shape2 rotateme">
                        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                    </div>

                    <div className="shape3 rotateme">
                        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
                    </div>

                    <div className="shape4">
                        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MainBanner;