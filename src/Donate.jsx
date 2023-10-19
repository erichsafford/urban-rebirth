import './styles/donate.css'
import donate_logo from './assets/donate/donate_logo.png'
import Header from './Header.jsx'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

function Donate() {
    const [period, setPeriod] = useState('once')

    return (
        <>
        <div className="normal-header">
            <Header />
        </div>
        <div className="horizontal-bar"></div>
        <h1 id='thank-you'>THANK YOU FOR SUPPORTING URBAN REBIRTH!</h1>
        <hr></hr>
        <div className='card'>
            <div className="card-header">
                <h1 id='card-header-text'>Choose Amount</h1>
                <ArrowRight size={35} color='white'/>
            </div>
            <h2 className='card-subtitle'>
                every penny counts. we appreciate your generosity!
            </h2>
            <div className='card-slider'>
                <div className='slider-choice-background'></div>
                <p className='slider-option'>one-time</p>
                <p className='slider-option'>monthly</p>
            </div>
            <form className='amount-options-container flex'>
                <div className="donate-option flex">
                    <input name='donate-option' type="radio" />
                    <h3 className='donate-option-amt'><sup>$</sup>15</h3>
                    <p className="donate-option-desc">one gallon of tempura paint for crosswalks and street murals</p>
                </div>
                <div className="donate-option flex">
                    <input name='donate-option' type="radio" />
                    <h3 className='donate-option-amt'><sup>$</sup>50</h3>
                    <p className="donate-option-desc">One sheet of plywood for outdoor cafe or subflooring</p>
                </div>
                <div className="donate-option flex">
                    <input name='donate-option' type="radio" />
                    <h3 className='donate-option-amt'><sup>$</sup>500</h3>
                    <p className="donate-option-desc">For pop-up plaza lighting and greenery</p>
                </div>
                <div className="donate-option flex">
                    <input name='donate-option' type="radio" />
                    <p className="donate-option-desc">Custom amount</p>
                </div>
            </form>
            <div aria-label='button' className='donate-next-button flex'>
                <p>NEXT</p>
                <ArrowRight size={35} color='white'/>
            </div>
            <div className='button-subtitle flex'>
                <p>powered by</p>
                <img src={donate_logo} alt="Bloomerang company logo" />
            </div>

        </div>
        </>
    )
}

export default Donate