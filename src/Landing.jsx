import urbanGarden from './assets/urbangarden.png'
import fariswheel from './assets/fariswheelgirl.png'
import skateboardcouple from './assets/skateboardersholdinghands.png'
import URlogo from './assets/logos/urban-rebirth.png'
import Header from './Header'
import Footer from './Footer'
import './styles/landing.css'

function LandingPage() {

    return (
        <>
        <header id='landing-header'>
            <img className='landing-logo' src={URlogo} alt="urban rebirth logo" />
            <Header />
        </header>

        <div className="horizontal-bar"></div>
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
        <Footer />
      </>

    )
}

export default LandingPage