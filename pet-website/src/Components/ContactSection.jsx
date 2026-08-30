import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-pets">

        <img
          src="/hero_image_06.png"
          alt="Dog and Cat"
        />

      </div>

      <div className="green-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="blue-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="contact-content">

        <h2>Contact Us</h2>

        <p>
          Have questions about our pet boarding services?
          We're here to help. Give us a call and we'll be
          happy to answer all your questions.
        </p>

        <img
          src="/contact.png"
          alt="Contact"
          className="contact-bone-image"
        />

      </div>

    </section>
  );
}

export default Contact;