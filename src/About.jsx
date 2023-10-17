import Header from "./Header";
import Footer from "./Footer";
import hannah from "./assets/staff/hannahalvarez.png"
import paul from "./assets/staff/paulgabrielson.svg"
import richard from "./assets/staff/richardfox.svg"
import toni from "./assets/staff/tonigarcia.svg"
import "./styles/about.css"

function About() {
    return (
        <>
            <header className="normal-header">
                <Header />
            </header>
            <div className="horizontal-bar centered-div">
                <p id="about-title-small">WE ARE</p>
                <h1 className="outline-text">URBAN REBIRTH</h1>
            </div>

            <section className="staff-container">
                <div className="staff">
                    <div id="toni" className="flex staff-profile">
                        <div id="toni-pic" className="relative"><img id="toni-pic" className="staff-portrait" src={toni} alt="Toni Garcia portrait" /></div>
                        <div className="staff-details">
                            <p className="name">Toni Garcia</p>
                            <p className="title">Executive Director</p>
                            <p className="email">tonigarcia@urbanrebirth.org</p>
                        </div>
                    </div>
                    <div id="richard" className="flex staff-profile">
                        <img className="staff-portrait" src={richard} alt="Richard Fox portrait" />
                        <div className="staff-details">
                            <p className="name">Richard Fox</p>
                            <p className="title">Architectural Designer</p>
                            <p className="email">richardfox@urbanrebirth.org</p>
                        </div>
                    </div>
                    <div id="hannah" className="flex staff-profile">
                        <img className="staff-portrait" src={hannah} alt="Hannah Alvarez portrait" />
                        <div className="staff-details">
                            <p className="name">Hannah Alvarez</p>
                            <p className="title">Creative Director</p>
                            <p className="email">hannahalvarez@urbanrebirth.org</p>
                        </div>
                    </div>
                    <div id="paul" className="flex staff-profile">
                        <img className="staff-portrait" src={paul} alt="Paul Gabrielson portrait" />
                        <div className="staff-details">
                            <p className="name">Paul Gabrielson</p>
                            <p className="title">Communications Director</p>
                            <p className="email">paulgabrielson@urbanrebirth.org</p>
                        </div>
                    </div>
                </div>
                <div id="about">
                    <div id="about-bold">
                        <p className="bold">We are based in green bay, wisconsin and have helped revitalize communities nation-wide.</p>
                    </div>
                    <div id="about-normal">
                        <p>Our team is comprised of urban planners, architectural designers, artists, journalists, IT professionals, and people who are committed to making the world a little better. We’ve received accolades from the White House, the New York Times, Forbes, Planetizen, and most importantly, the communities we work with. We’re a small but mighty team that works hard to ensure everyone gets a chance at a better future.</p>
                    </div>
                </div>
            </section>

            <div className="horizontal-bar"></div>
            <Footer />
        </>
    )
}

export default About