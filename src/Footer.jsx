import facebook from './assets/logos/facebook.svg'
import instagram from './assets/logos/instagram.svg'
import youtube from './assets/logos/youtube.svg'
import twitter from './assets/logos/twitter.svg'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <h1 footer-header>urban rebirth</h1>
                <p>©2023 urban rebirth society</p>
                <p>green bay, wi</p>
                <p>555.123.9988</p>
                <p>contact@urbanrebirth.org</p>
                <div className="footer-icons">
                    <img src={facebook} alt="facebook logo" />
                    <img src={instagram} alt="instagram logo" />
                    <img src={youtube} alt="youtube logo" />
                    <img src={twitter} alt="twitter logo" />
                </div>

            </div>

        </>
    )
}

export default Footer