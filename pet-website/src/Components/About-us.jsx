import "./About-us.css";

function AboutUs() {

    return(
        <section className="about-section" id="about">

            <div className="about-heading">

                <span className="about-dot"></span>

                <h2>About Us</h2>

                <p>
                    From the time our friends sniff thier way through the door until they<br/>
                    wag their tails out in the afternoon, we  cater to their nature.
                </p>

            </div>

            <div className="about-cards">

                <div className="about-card location-card">

                    <div className="about-icon">
                        <i className="fa-solid fa-house"></i>
                    </div>

                    <h3>Location</h3>

                     <p>
                        1426 South Road,<br />
                        Green Meadows VIC<br />
                        Australia
                    </p>

                    <a href="#location">
                        VIEW MORE <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

                <div className="about-card contact-card">

                    <div className="about-icon">
                        <i className="fa-solid fa-paw"></i>
                    </div>

                    <h3>Contact</h3>

                    <p>
                        Telephone<br />
                        +1300 024 888<br />
                        +1300 024 888
                    </p>

                    <a href="#contact">
                        VIEW MORE <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="about-card dog-card">

                    <div className="about-icon">
                        <i className="fa-solid fa-dog"></i>
                    </div>

                    <h3>Dog Boarding</h3>

                    <p>
                        While you're on holiday,
                        here's where furry friends
                        will spend their time.
                    </p>

                    <a href="#dogs">
                        BOOK NOW <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

                <div className="about-card cat-card">

                    <div className="about-icon">
                         <i className="fa-solid fa-cat"></i>
                    </div>

                    <h3>Cat Boarding</h3>

                    <p>
                        We have highest quality
                        accommodations for even
                        the fussiest feline.
                    </p>

                    <a href="#cats">
                         VIEW MORE <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>

            <div className="about-bg-image">
                 <img src="/grey-i.jpg" alt="" />
            </div>
        </section>
    );
}
export default AboutUs;