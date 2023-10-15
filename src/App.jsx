import LandingPage from "./Landing.jsx"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import About from "./About.jsx"
import OurWork from "./OurWork.jsx"
import ImageSlider from "./ImageSlider.jsx"
import { useState } from "react"


function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        width: "100%",
        aspectRatio: "2/3",
        margin: "0 auto"
      }}
    >
      <ImageSlider images={'cleanup'} />
    </div>
  )
}

export default App
