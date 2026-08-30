import "./cat-boarding.css";

function CatBoarding() {
  return (
    <section className="cat-section" id="cats">

      <div className="cat-image">

        <img
          src="/hero_image_02.png"
          alt="Cat Boarding"
        />

        <img
          src="/dots.png"
          alt=""
          className="bottom-decoration"
        />

      </div>

      <div className="cat-content">

        <img
          src="/dots.png"
          alt=""
          className="top-decoration"
        />

        <h2>Cat Boarding</h2>

        <p>
          We offer long-term and short-term boarding. Every cat family has
          their own private, spacious room and daily individual time in our
          large play room for even the fussiest feline.
        </p>

        <div className="cat-features">

          <div className="cat-feature eat-feature">
              <i className="fa-solid fa-fish"></i>
              <span>EAT</span>
          </div>

          <div className="cat-feature play-feature">
              <i className="fa-solid fa-chess-pawn"></i>
              <span>PLAY</span>
          </div>

          <div className="cat-feature sleep-feature">
              <i className="fa-solid fa-bed"></i>
              <span>SLEEP</span>
          </div>
        </div>

        <div className="cat-buttons">

          <a href="#booking" className="book-btn">
            BOOK NOW
          </a>

          <a href="#cats-more" className="view-btn">
            VIEW MORE
          </a>

        </div>

      </div>

    </section>
  );
}

export default CatBoarding;