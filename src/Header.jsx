import search from './assets/search.svg'
import Link from './Link.jsx'
import './styles/header.css'



function Header() {
    return (
        <>
            <div className="general-header-container">
                <ul className="header-links">
                    <Link to="/" className="header-link">HOME</Link>
                    <Link to="/about" className="header-link">WHO WE ARE</Link>
                    <Link to="/ourwork" className="header-link">WHAT WE DO</Link>
                    <Link to="/howtohelp" className="header-link">HOW TO HELP</Link>
                    <Link to="/locations" className="header-link">WHERE WE WORK</Link>
                </ul>
                <div className="search-donate">
                    <img src={search} alt="search icon" />
                    <Link to="/donate">
                        <button className="donate-button bkg-red text-white">DONATE</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header