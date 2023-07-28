import React from 'react';
import { Link } from 'react-router-dom';

class EventSchedulesThree extends React.Component {
    render() {
        return (
            <section className="schedule-area schedule-style-three bg-image ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-schedule-item">
                                <div className="schedule-date">
                                    Day - 01

                                    <span>25<sup>th</sup> August 2023</span>

                                </div>

                                <div className="schedule-item-wrapper">
                                    <div className="schedule-content">
                                        {/* <div className="author">
                                            <img 
                                                src={require("../../assets/images/author1.jpg")}
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3><Link to="#">Inauguration</Link></h3>

                                            <ul>
                                                {/* <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Riley</Link> CEO of EnvyTheme
                                                </li> */}
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 09:30AM - 10:00AM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author5.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author2.jpg")}
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author3.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author4.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Doe" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Artificial Intelligence and Computational Medicine </Link>
                                            </h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> Dr. Angshul Majumdar </li>
                                                <li><i className="icofont-wall-clock"></i> 10:00AM - 11:30AM</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">AI/ML use cases, challenges and results: Industry perspective for Robotics</Link>
                                            </h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> By Dr. Harshal Oza </li>
                                                <li><i className="icofont-wall-clock"></i> 11:45AM - 01:15PM</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Visualization Of Robot Movement Based On Component-Oriented Model For Embedded Worlds</Link>
                                            </h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> By Dr. Tapas Kumar Maiti</li>
                                                <li><i className="icofont-wall-clock"></i> 02:00PM - 03:30PM</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Hands-on Session on Visualization of Robot</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By Dr. Tapas Maiti
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 03:45PM - 05:15PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3><Link to="#">Standard for functional safety data format for interoperability within the dependability lifecycle</Link></h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> Dr. Jyotika Athavale </li>
                                                <li><i className="icofont-wall-clock"></i> 08:00PM ONWARDS </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-schedule-item">
                                <div className="schedule-date">
                                    Day - 02

                                    <span>26<sup>th</sup> August 2023</span>

                                </div>

                                <div className="schedule-item-wrapper">
                                    <div className="schedule-content">
                                        {/* <div className="author">
                                            <img 
                                                src={require("../../assets/images/author1.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Deep Recurrent Neural Network Architecture For Sequence-To-Sequence Modelling In Autonomous AI Based Speech Recognition System</Link>
                                            </h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> By Dr Mahesh Anand</li>
                                                <li><i className="icofont-wall-clock"></i> 10:00AM - 11:30AM</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author5.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author2.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith"
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author3.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author4.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Doe" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Intelligent Transportation System</Link>
                                            </h3>

                                            <ul>
                                                <li><i className="icofont-user-suited"></i> By Dr. Nalin Sharma</li>
                                                <li><i className="icofont-wall-clock"></i> 11:45PM - 01:15PM</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3><Link to="#">Computer vision for sports video analytics</Link></h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By Dr. Mehul Raval
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 02:00PM - 03:30PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                        <div className="schedule-info">
                                            <h3><Link to="#">Validcatory Session and Certificate Distribution</Link></h3>

                                            <ul>
                                                {/* <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Miles</Link> CEO of EnvyTheme
                                                </li> */}
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 03:45PM - 05:15PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    


                                    <div className="schedule-content">
                                        {/* <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div> */}

                                    </div>



                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-6">
                            <div className="single-schedule-item">
                                <div className="schedule-date">
                                    Day - 03

                                    <span>6 April 2020</span>
                                </div>

                                <div className="schedule-item-wrapper">
                                    <div className="schedule-content">
                                        <div className="author">
                                            <img 
                                                src={require("../../assets/images/author1.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Smith" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital Marketing Theory</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Nathaniel</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author5.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author2.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author3.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author4.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Doe" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital World Event Information</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Ethan</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital Marketing Theory</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Lewis</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="single-schedule-item">
                                <div className="schedule-date">
                                    Day - 04

                                    <span>7 April 2020</span>
                                </div>

                                <div className="schedule-item-wrapper">
                                    <div className="schedule-content">
                                        <div className="author">
                                            <img 
                                                src={require("../../assets/images/author1.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Smith" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital Marketing Theory</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Milton</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author5.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author2.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author3.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Smith" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author4.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="John Doe" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital World Event Information</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Claude</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                        <div className="author author-multi">
                                            <img 
                                                src={require("../../assets/images/author8.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Steven Lucy" 
                                                alt="Schedules" 
                                            />
                                            <img 
                                                src={require("../../assets/images/author9.jpg")} 
                                                data-toggle="tooltip" 
                                                data-placement="top" 
                                                title="Jonaton Smith" 
                                                alt="Schedules" 
                                            />
                                        </div>
                                        
                                        <div className="schedule-info">
                                            <h3>
                                                <Link to="#">Digital Marketing Theory</Link>
                                            </h3>

                                            <ul>
                                                <li>
                                                    <i className="icofont-user-suited"></i> 
                                                    By <Link to="#">Miles</Link> CEO of EnvyTheme
                                                </li>
                                                <li>
                                                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
            </section>
        );
    }
}

export default EventSchedulesThree;