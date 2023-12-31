import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import '../../assets/css/logo.css'

 
class Navigation extends React.Component {

    state = {
        collapsed: true,
        isOpen: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    componentDidUpdate(nextProps) {
        if (this.props.match.path !== nextProps.match.path) {
            // this.onRouteChanged();
            console.log('OK')
        }
    }

    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        // const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <header id="header" className="header-area">
                <div id="navbar" className="elkevent-nav">
                    <nav className="navbar navbar-expand-md navbar-light">
                        
                        <div className="container">
                            <Link className="navbar-brand" to="/Netsip">
                                <img src={require("../../assets/images/netsip-01.png")} alt="Netsip" class="logo-image" />
                                

                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link 
                                            exact="true" 
                                            to="/Netsip" 
                                            onClick={this.toggleOpen} 
                                            className="nav-link"
                                        >
                                            Home
                                        </Link>

                                    
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link 
                                            to="/about-1" 
                                            onClick={this.toggleOpen} 
                                            className="nav-link"
                                        >
                                            About Event
                                        </Link>
                                        
                                     
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/speakers-1" 
                                            className="nav-link"
                                            onClick={this.toggleOpen}
                                        >
                                            Speakers
                                        </Link>
                                        
                                        
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="/schedule-3" 
                                            className="nav-link"
                                            onClick={this.toggleOpen}
                                        >
                                            Schedule
                                        </Link>
                                        
                                    </li>

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/about-2" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                           About Us
                                        </NavLink>
                                    </li>
                                
                                {/*<li className="nav-item">
                                        <Link 
                                            to="/blog-1" 
                                            className="nav-link" 
                                            onClick={this.toggleOpen}
                                        >
                                            Blog
                                        </Link>
                                        
                                    </li>*/}

                                    <li className="nav-item">
                                        <NavLink 
                                            to="/contact" 
                                            className="nav-link" 
                                            onClick={this.toggleNavbar}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                                <div className="others-option">
                                    <ul>
                                        <li>
                                            <NavLink 
                                                to="#" 
                                                className="btn btn-primary" 
                                                onClick={this.toggleNavbar}
                                            >
                                                Register Now
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
 
export default withRouter(Navigation);