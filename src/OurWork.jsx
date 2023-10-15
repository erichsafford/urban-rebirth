import Header from "./Header";
import Footer from "./Footer";
import architecture from "./assets/icons/architecture.png"
import cleanup from "./assets/icons/cleanup.png"
import community from "./assets/icons/community.png"
import greenspace from "./assets/icons/greenspace.png"
import repair from "./assets/icons/repair.png"
import smallbusiness from "./assets/icons/smallbusiness.png"
import { useReducer } from "react";


function OurWork() {
    return (
        <>
            <header id="normal-header">
                <Header />
            </header>
            <div className="horizontal-bar centered-div">
                <h1 className="outline-text">OUR WORK</h1>
            </div>

            <div className="services-picker">
                <div className="service" id="greenspace">
                    <img src={greenspace} alt="Icon of hand holding plant" />
                    <p className="service-subtitle">GREEN SPACE</p>
                </div>
                <div className="service" id="cleanup">
                    <img src={cleanup} alt="Icon of a trash can" />
                    <p className="service-subtitle">CLEANUP</p>
                </div>
                <div className="service" id="smallbusiness">
                    <img src={smallbusiness} alt="Icon of two hands shaking" />
                    <p className="service-subtitle">SMALL BUSINESS</p>
                </div>
                <div className="service" id="community">
                    <img src={community} alt="Icon of a group of people" />
                    <p className="service-subtitle">COMMUNITY</p>
                </div>
                <div className="service" id="architecture">
                    <img src={architecture} alt="Icon of architecture tools" />
                    <p className="service-subtitle">ARCHITECTURE & DESIGN</p>
                </div>
                <div className="service" id="repair">
                    <img src={repair} alt="Icon of a hammer and saw" />
                    <p className="service-subtitle">REPAIR/BUILD</p>
                </div>
            </div>

            <div className="horizontal-bar"></div>
            <Footer />
        </>
    )
}

export default OurWork