import "./dog-kennels.css";

function DogKennels() {
  return (
    <section className="dog-section" id="dogs">

      <div className="dog-content">

        <h2>Dog Kennels</h2>

        <p>
          Designed so animals can relax & indulge in pet stylists, run around <br />
          our exercise yards, make new friends in doggy daycare, or simply <br />
          spend hours in our dog grooming salon.
        </p>

        <div className="dog-features">

          <div className="dog-feature eat-feature">
            <i className="fa-solid fa-bowl-food"></i>
            <span>EAT</span>
          </div>

          <div className="dog-feature play-feature">
            <i className="fa-solid fa-baseball"></i>
            <span>PLAY</span>
          </div>

          <div className="dog-feature brush-feature">
            <i className="fa-solid fa-brush"></i>
            <span>BRUSH</span>
          </div>

        </div>

        <div className="dog-buttons">

          <a href="#booking" className="dog-book-btn">
            BOOK NOW
          </a>

          <a href="#dogs-more" className="dog-view-btn">
            VIEW MORE
          </a>

        </div>

      </div>

      <div className="dog-image">

        <img
          src="/dog-boarding.png"
          alt="Dog Kennels"
          className="dog-main-image"
        />

        <img
          src="/dots.png"
          alt=""
          className="dog-top-dot"
        />

        <img
          src="/dots.png"
          alt=""
          className="dog-middle-dot"
        />

      </div>

    </section>
  );
}

export default DogKennels;