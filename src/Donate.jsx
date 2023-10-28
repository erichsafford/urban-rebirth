import './styles/donate.css'
import donate_logo from './assets/donate/donate_logo.png'
import Header from './Header.jsx'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'


function Donate() {
    const [isMonthly, setIsMonthly] = useState(false)
    const [textActive, setTextActive] = useState('black')
    const [open, setOpen] = useState(false)

    const handleSliderClick = () => {
        setIsMonthly(!isMonthly)
        setTextActive(isMonthly ? 'black' : 'white')
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
        <div className="normal-header">
            <Header />
        </div>
        <div className="horizontal-bar"></div>
        <h1 id='thank-you'>THANK YOU FOR SUPPORTING URBAN REBIRTH!</h1>
        <hr></hr>
        <div className='donate-card'>
            <div className="card-header">
                <h1 id='card-header-text'>Choose Amount</h1>
                <ArrowRight size={35} color='white'/>
            </div>
            <h2 className='card-subtitle'>
                every penny counts. we appreciate your generosity!
            </h2>
            <div onClick={handleSliderClick} className='card-slider'>
                <div className={`slider-choice-background ${isMonthly ? 'monthly' : 'one-time'}`}></div>
                <p className={`slider-option ${isMonthly ? 'text-inactive' : 'text-active'}`}>one-time</p>
                <p className={`slider-option ${isMonthly ? 'text-active' : 'text-inactive'}`}>monthly</p>
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
            <button className='donate-next-button flex' onClick={handleOpen}>
                <p>NEXT</p>
                <ArrowRight size={35} color='white'/>
            </button>
            <div className='button-subtitle flex'>
                <p className='tooltip'>powered by
                    <span className='tooltip-text'>Not actually</span>
                </p>
                <img src={donate_logo} alt="Bloomerang company logo" />
            </div>

        </div>
        </>
    )
}

export default Donate