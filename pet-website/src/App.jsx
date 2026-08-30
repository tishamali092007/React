import AboutUs from "./Components/About-us";
import Blog from "./Components/blog";
import CatBoarding from "./Components/cat-boarding";
import ContactSection from "./Components/ContactSection";
import DogKennels from "./Components/dog-kennels";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import WhatToBring from "./Components/WhatToBring";


export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <CatBoarding/>
      <DogKennels/>
      <WhatToBring/>
      <ContactSection/>
      <Pricing/>
      <Blog/>
      <Footer/>
      
    </div>
  );
}