import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { ArrowRight } from 'lucide-react'
import './styles/donate.css'

function Volunteer() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
        <div className="normal-header">
            <Header />
        </div>
        <div className="horizontal-bar"></div>
        <h1 id='thank-you'>THANK YOU FOR VOLUNTEERING!</h1>
        <hr></hr>
        <div className='card'>
            <div className="card-header">
                <h1 id='card-header-text'>Choose Amount</h1>
                <ArrowRight size={35} color='white'/>
            </div>
            <h2 className='card-subtitle'>
                PLEASE FILL IN THE FOLLOWING INFORMATION
            </h2>

            <form className='amount-options-container flex'>
                <input type="text" name="name" placeholder="NAME"/>
                <input type="email" name="email" placeholder="NAME@DOMAIN.COM"/>
                <input type="text" name="zip" placeholder="ZIPCODE"/>
                <fieldset className="skill-options">
                    <legend>PLEASE MARK THE SKILLS YOU'D LIKE TO CONTRIBUTE</legend>
                    <div className="skill-option">
                        <input type="checkbox" name="carpentry" />
                        <label for="carpentry">CARPENTRY</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="electrical" />
                        <label for="electrical">electrical</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="plumbing" />
                        <label for="plumbing">plumbing</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="hauling" />
                        <label for="hauling">hauling</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="hauling" />
                        <label for="hauling">hauling</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="outreach" />
                        <label for="outreach">outreach</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="landscaping/gardening" />
                        <label for="landscaping/gardening">landscaping/gardening</label>
                    </div>
                    <div className="skill-option">
                        <input type="checkbox" name="cleaning" />
                        <label for="cleaning">cleaning</label>
                    </div>
                </fieldset>
                <button type="submit" className='donate-next-button flex'>
                    <p>SUBMIT</p>
                    <ArrowRight size={35} color='white'/>
                </button>
            </form >
        </div>

        </>
    )
}

export default Volunteer

