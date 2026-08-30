import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">

      <div className="pricing-intro">
        <h2>
          The Best
          <br />
          Choice
        </h2>

        <p>
          We take the responsibility of
          <br />
          caring for pets very seriously.
          <br />
          They are your family.
        </p>
      </div>

      <div className="pricing-cards">

        <div className="pricing-card">

          <h3>1 Day</h3>

          <div className="plan-icon green-icon">
            <i className="fa-solid fa-bowl-food"></i>
          </div>

          <div className="plan-features">

            <div className="feature-row">
              <span>Double room</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Socialise</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Brush</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Pet TV</span>
              <i className="fa-solid fa-xmark wrong-icon"></i>
            </div>

          </div>

          <div className="price">
            <sup>$</sup>50
          </div>

        </div>

        <div className="pricing-card featured">

          <h3>10 Days</h3>

          <div className="plan-icon yellow-icon">
            <i className="fa-solid fa-bed"></i>
          </div>

          <div className="plan-features">

            <div className="feature-row">
              <span>Single room</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Socialise Exercise</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Custom Meals</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Spa and Grooming</span>
              <i className="fa-solid fa-check"></i>
            </div>

          </div>

          <div className="price">
            <sup>$</sup>350
          </div>

        </div>

        <div className="pricing-card">

          <h3>20 Days</h3>

          <div className="plan-icon blue-icon">
            <i className="fa-solid fa-house"></i>
          </div>

          <div className="plan-features">

            <div className="feature-row">
              <span>Single room</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Exercise 2x</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Custom Meals</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="feature-row">
              <span>Grooming 2x</span>
              <i className="fa-solid fa-check"></i>
            </div>

          </div>

          <div className="price">
            <sup>$</sup>550
          </div>

        </div>

      </div>

    </section>
  );
}

export default Pricing;