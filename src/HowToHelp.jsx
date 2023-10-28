import './styles/howToHelp.css'
import Header from './Header.jsx'
import Footer from './Footer'
import Link from './Link.jsx'
import { useState } from 'react'

function HowToHelp() {
    const [blurbStatus, setBlurbStatus] = useState('volunteer')

    function Blurb() {
        if (blurbStatus === 'volunteer') {
            return (
                <div className='blurb-container'>
                    <p>Volunteering with us is a rewarding experience that goes beyond making a difference in your community. By joining our team, you'll gain a sense of purpose, connect with like-minded individuals, and witness the positive impact of your efforts firsthand.</p>
                    <p>Whether you're passionate about green spaces, neighborhood revitalization, or community building, volunteering with us allows you to be part of a movement that creates safer, greener, and more vibrant urban environments.</p>
                    <p>Join us in shaping a brighter future, one volunteer at a time!</p>
                </div>
            )
        } else {
            return (
                <div className="blurb-container">
                    <p>Your donation can be the cornerstone of positive change in urban communities. By supporting our organization's mission of revitalizing neighborhoods and creating thriving, connected communities, you are investing in a brighter future for all.</p>
                    <p>Your generosity fuels the projects that build safer, greener, and more vibrant cities.</p>
                    <p>Together, we can transform urban spaces and uplift lives. Make a difference today through your donation, and be a part of the urban rebirth movement.</p>
                </div>
            )
        }
    }

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
                    <Link to="/volunteer" >
                        <button className='reg-btn' onMouseEnter={() => {
                        setBlurbStatus('volunteer')
                        console.log('Status set to "volunteer"')
                    }}>VOLUNTEER</button>
                    </Link>
                    <Blurb />
                </div>
                <div className="right-container">
                    <button id='vertical-bar-anchor' className='reg-btn' onMouseEnter={() => {
                        setBlurbStatus('donate')
                        console.log('Status set to "donate"')
                        }}>DONATE</button>
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