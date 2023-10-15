import Header from "./Header";
import Footer from "./Footer";
import architecture from "./assets/icons/architecture.png"
import cleanup from "./assets/icons/cleanup.png"
import community from "./assets/icons/community.png"
import greenspace from "./assets/icons/greenspace.png"
import repair from "./assets/icons/repair.png"
import smallbusiness from "./assets/icons/smallbusiness.png"
import ourWorkBlurbs from "./ourWorkBlurbs.jsx"
import ImageSlider from "./ImageSlider";
import { useState } from "react";
import './styles/ourWork.css'



function OurWork() {
    const [activeService, setActiveService] = useState('greenSpace')

    function handleClick(action) {
        switch (action) {
            case 'greenSpace':
                setActiveService('greenSpace')
                break
            case 'cleanup':
                setActiveService('cleanup')
                break
            case 'business':
                setActiveService('business')
                break
            case 'community':
                setActiveService('community')
                break
            case 'design':
                setActiveService('design')
                break
            case 'repair':
                setActiveService('repair')
                break
            default:
                break
        }
    }

    // Find the blurb for the active service
    const activeServiceBlurb = ourWorkBlurbs.find(blurb => blurb.service === activeService)

    return (
        <>
            <header id="normal-header">
                <Header />
            </header>
            <div className="horizontal-bar centered-div">
                <h1 className="outline-text">OUR WORK</h1>
            </div>

            <section className="our-work">
                <div className="our-work-left">
                    <div className="services-picker">
                        <div onClick={() => handleClick('greenSpace')} className="service" id="greenspace">
                            <img src={greenspace} alt="Icon of hand holding plant" />
                            <p className="service-subtitle">GREEN SPACE</p>
                        </div>
                        <div onClick={() => handleClick('cleanup')} className="service" id="cleanup">
                            <img src={cleanup} alt="Icon of a trash can" />
                            <p className="service-subtitle">CLEANUP</p>
                        </div>
                        <div onClick={() => handleClick('business')} className="service" id="smallbusiness">
                            <img src={smallbusiness} alt="Icon of two hands shaking" />
                            <p className="service-subtitle">SMALL BUSINESS</p>
                        </div>
                        <div onClick={() => handleClick('community')} className="service" id="community">
                            <img src={community} alt="Icon of a group of people" />
                            <p className="service-subtitle">COMMUNITY</p>
                        </div>
                        <div onClick={() => handleClick('design')} className="service" id="architecture">
                            <img src={architecture} alt="Icon of architecture tools" />
                            <p className="service-subtitle">ARCHITECTURE & DESIGN</p>
                        </div>
                        <div onClick={() => handleClick('repair')} className="service" id="repair">
                            <img src={repair} alt="Icon of a hammer and saw" />
                            <p className="service-subtitle">REPAIR/BUILD</p>
                        </div>
                    </div>
                    <div className="our-work-blurb">
                        <p>{activeServiceBlurb ? activeServiceBlurb.text : 'Service not found'}</p>
                    </div>
                </div>
                <div
                    style={{
                        maxWidth: "700px",
                        width: "100%",
                        aspectRatio: "2/3",
                        margin: "0 auto"
                    }}
                  className="photo-switcher our-work-right">
                    <ImageSlider images={activeService}/>
                </div>
            </section>
            <div className="horizontal-bar"></div>
            <Footer />
        </>
    )
}

export default OurWork