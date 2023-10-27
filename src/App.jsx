import LandingPage from "./Landing.jsx"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import About from "./About.jsx"
import OurWork from "./OurWork.jsx"
import HowToHelp from "./HowToHelp.jsx"
import Donate from "./Donate.jsx"
import Locations from "./Locations.jsx"
import BrowserRouter from "./BrowserRouter.jsx"
import Route from "./Route.jsx"


function App() {
  return (
      <>
      <BrowserRouter>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ourwork">
          <OurWork />
        </Route>
        <Route path="/howtohelp">
          <HowToHelp />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>

      </BrowserRouter>
      </>
  )
}

export default App
