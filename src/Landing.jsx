import search from './assets/search.svg'
import urbanGarden from './assets/urbangarden.png'
import fariswheel from './assets/fariswheelgirl.png'
import skateboardcouple from './assets/skateboardersholdinghands.png'
import URlogo from './assets/logos/urban-rebirth.png'

function LandingPage() {

    return (
        <>
        <div className="header-container">
            <img className='landing-logo' src={URlogo} alt="urban rebirth logo" />
            <div className="header-elements">
                <ul className="header-links">
                    <li className="header-link">WHO WE ARE</li>
                    <li className="header-link">WHAT WE DO</li>
                    <li className="header-link">HOW TO HELP</li>
                    <li className="header-link">WHERE WE WORK</li>
                </ul>
                <div className="search-donate">
                    <img src={search} alt="search icon" />
                    <button className="donate-button bkg-red text-white">DONATE</button>
                </div>
            </div>
        </div>
        <div className="horizontal-bar"></div>
        <div className="vertical-bar"></div>
        <div className='tagline-container'>
            <p className="tagline text-black">
            we <span className='text-red emphasis'>empower</span> communities to take control of their neighborhood, their block, their green spaces, and more.</p>
            <p className="tagline text-black">We supply the materials, you supply the <span className='text-red emphasis'>people</span>.</p>
        </div>
        <div className='picture-container'>
            <div className='picture-group'>
                <img src={urbanGarden} alt="woman working in garden" />
                <p className='picture-title'>renew</p>
            </div>
            <div className='picture-group'>
                <img src={fariswheel} alt="woman in front of ferris wheel" />
                <p className='picture-title'>rebuild</p>
            </div>
            <div className='picture-group skateboard-couple'>
                <img src={skateboardcouple} alt="skateboarders holding hands" />
                <p className='picture-title'>reconnect</p>
            </div>
        </div>
        <div className="horizontal-bar"></div>
      </>

    )
}

export default LandingPage