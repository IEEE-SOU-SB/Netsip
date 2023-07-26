import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeDefault from "./components/pages/HomeDefault";
import Navigation from "./components/Navigation/Navigation";
// import {Redirect } from 'react-router-dom';
// import HomeTwo from "./components/pages/HomeTwo";
// import HomeThree from "./components/pages/HomeThree";
// import HomeFour from "./components/pages/HomeFour";
// import HomeFive from "./components/pages/HomeFive";
import AboutOne from "./components/pages/AboutOne";
import AboutTwo from "./components/pages/AboutTwo";
// import AboutThree from "./components/pages/AboutThree";
// import PricingOne from "./components/pages/PricingOne";
// import PricingTwo from "./components/pages/PricingTwo";
import SpeakersOne from "./components/pages/SpeakersOne";
// import SpeakersTwo from "./components/pages/SpeakersTwo";
// import SpeakersThree from "./components/pages/SpeakersThree";
// import ScheduleOne from "./components/pages/ScheduleOne";
// import ScheduleTwo from "./components/pages/ScheduleTwo";
import ScheduleThree from "./components/pages/ScheduleThree";
// import ScheduleFour from "./components/pages/ScheduleFour";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ComingSoon from "./components/pages/ComingSoon";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
// import BlogOne from "./components/pages/BlogOne";
// import BlogTwo from "./components/pages/BlogTwo";
// import BlogThree from "./components/pages/BlogThree";
// import BlogFour from "./components/pages/BlogFour";
// import BlogDetails from "./components/pages/BlogDetails";
import Sponsor from "./components/pages/Sponsor";

// Conditionally render Navigation
const renderNavigation = () => {
    if (!(window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/coming-soon' || window.location.pathname === '/error-404')){
        return <Navigation />;
    }
}

const AppRouter = () => {
    return (
        <Router>
            {renderNavigation()}
            <Switch>
                <Route path="/Netsip" exact component={HomeDefault} />
                <Route path="/about-1" exact component={AboutOne} />
                <Route path='/about-2' component={() => {window.location.href = 'https://ieee.socet.edu.in/about-socet-sb/';return null;}}/>
                <Route path="/speakers-1" exact component={SpeakersOne} />
                <Route path="/schedule-3" exact component={ScheduleThree} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/coming-soon" exact component={ComingSoon} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/sponsors" exact component={Sponsor} />
                <Route path="/error-404" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;