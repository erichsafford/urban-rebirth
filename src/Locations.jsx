import './styles/locations.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import map from './assets/map.png'

function Locations() {
    return (
        <>
            <div className="normal-header">
                <Header />
            </div>
            <div className="horizontal-bar centered-div">
                <p id="about-title-small">Where</p>
                <h1 className="outline-text">We've left our mark</h1>
            </div>
            <div className="content-container">
                <div className="locations-list">
                    <p className="location">Green Bay, WI</p>
                    <p className="location">Milwaukee, WI</p>
                    <p className="location">Madison, WI</p>
                    <p className="location">Chicago, IL</p>
                    <p className="location">Fort Wayne, IN</p>
                </div>
                <div className='map-container'>
                    <img className='map' src={map} alt="Map of locations where we have done work" />
                </div>
            </div>
            <div className="horizontal-bar centered-div"></div>
            <Footer />
        </>
    )
}

export default Locations
