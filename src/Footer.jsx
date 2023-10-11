import facebook from './assets/logos/facebook.svg'
import instagram from './assets/logos/instagram.svg'
import youtube from './assets/logos/youtube.svg'
import twitter from './assets/logos/twitter.svg'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className='footer-inner-container'>
                    <h1 className='footer-header'>urban rebirth</h1>
                    <p className='footer-content'>©2023 urban rebirth society</p>
                    <p className='footer-content'>green bay, wi</p>
                    <p className='footer-content'>555.123.9988</p>
                    <p className='footer-content'>contact@urbanrebirth.org</p>
                    <div className="footer-icons">
                        <img src={facebook} alt="facebook logo" />
                        <img src={instagram} alt="instagram logo" />
                        <img src={youtube} alt="youtube logo" />
                        <img src={twitter} alt="twitter logo" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer