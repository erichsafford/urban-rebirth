import search from './assets/search.svg'
import './styles/header.css'



function Header() {
    return (
        <>
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
        </>
    )
}

export default Header