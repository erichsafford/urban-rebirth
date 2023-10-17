import './styles/donate.css'
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

        </div>
        </>
    )
}

export default Donate