import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About.jsx"
import WhyChoose from "./components/WhyChoose/WhyChoose.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Popup from "./components/Popup/Popup.jsx"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(false);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    // Do not refresh AOS for Popup component
    AOS.refresh({ exclude: ".popup" });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}

export default App
