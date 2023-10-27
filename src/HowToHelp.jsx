import './styles/howToHelp.css'
import Header from './Header.jsx'
import Footer from './Footer'
import Link from './Link.jsx'

function HowToHelp() {

    return (
        <>
            <div className="normal-header">
                <Header />
            </div>
            <div className="horizontal-bar centered-div">
                <h1 className="outline-text">JOIN THE CAUSE</h1>
            </div>
            <section className="main-container">
                <div className="left-container">
                    <Link to="/volunteer">
                        <button className='reg-btn'>VOLUNTEER</button>
                    </Link>
                    <div className="blurb-container">
                        <p>Your donation can be the cornerstone of positive change in urban communities. By supporting our organization's mission of revitalizing neighborhoods and creating thriving, connected communities, you are investing in a brighter future for all.</p>
                        <p>Your generosity fuels the projects that build safer, greener, and more vibrant cities.</p>
                        <p>Together, we can transform urban spaces and uplift lives. Make a difference today through your donation, and be a part of the urban rebirth movement.</p>
                    </div>
                </div>
                <div className="right-container">
                    <button id='vertical-bar-anchor' className='reg-btn'>DONATE</button>
                    <div className="dashed-line"></div>
                    <Link to="/donate">
                        <button className='lrg-btn'>DONATE NOW!</button>
                    </Link>
                </div>
            </section>
            <div className="horizontal-bar"></div>
            <Footer />
        </>
    )
}

export default HowToHelp