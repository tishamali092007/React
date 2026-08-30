import Header from "./Header";
import "./Hero.css";

function Hero () {
  return(
    <section className="hero-section" id="home">

      <Header/>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p>PET BOARDING</p>

        <h1>We keep them happy</h1>

      </div>

       <a href="#about" className="book-now-image">
        <img src="/hero-book-now.png" alt="Book Now" />
      </a>

    </section>
  );
}
export default Hero;