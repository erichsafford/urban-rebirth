import search from './assets/search.svg'
import URlogo from './assets/logos/urban-rebirth.png'


function Header() {
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
                </div>
                <div className="search-donate">
                    <img src={search} alt="search icon" />
                    <button className="donate-button bkg-red text-white">DONATE</button>
                </div>
            </div>
        </>
    )
}

export default Header