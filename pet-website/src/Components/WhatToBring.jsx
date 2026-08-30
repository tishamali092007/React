import "./WhatToBring.css";

function WhatToBring() {
  return (
    <section className="bring-section" id="bring">

      <div className="bring-heading">
        <span>TIPS AND TRICKS</span>
        <h2>What to Bring</h2>
      </div>

      <div className="bring-grid">

        <div className="bring-item">
          <div className="check-icon green">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>Bring Your Own Food</h3>
            <p>
              Use small plastic baggies to package pre-measured meals and
              label them Breakfast, Lunch and Dinner.
            </p>
          </div>
        </div>

        <div className="bring-item">
          <div className="check-icon peach">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>Medicine & supplements</h3>
            <p>
              Make sure to include the appropriate  <br /> number of doses that your
              dog will need to <br />take in your absence.
            </p>
          </div>
        </div>

        <div className="bring-item">
          <div className="check-icon blue">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>Favorite toys</h3>
            <p>
              Even though we're equipped with all sorts <br /> of toys, almost every
              dog has their favorites <br /> that they just can't live without.
            </p>
          </div>
        </div>

        <div className="bring-item">
          <div className="check-icon peach">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>At least 1 leash</h3>
            <p>
              It's always a good idea to include 2 in case <br /> the other is lost.
              If you don't have more <br /> than one, we'll give you.
            </p>
          </div>
        </div>

        <div className="bring-item">
          <div className="check-icon yellow">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>Documents Required</h3>
            <p>
              Be sure that all required documents and forms are ready to
              present on drop off day. Contact us for more info.
            </p>
          </div>
        </div>

        <div className="bring-item">
          <div className="check-icon green">
            <i className="fa-solid fa-check"></i>
          </div>
          <div>
            <h3>A reminder of Home</h3>
            <p>
              To keep your dog feeling close to you even in <br />your absence,
              include something with your <br /> scent, ex. scarf.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default WhatToBring;