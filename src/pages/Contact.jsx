import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <section className="banner">
        <h1>Contact Us</h1>
        <p>Get in touch with our team.</p>
      </section>

      <section className="section">
        <h2>Get in Touch</h2>
        <p>We are always happy to hear from you.</p>
      </section>

      <section className="section light">
        <h2>Contact Information</h2>
        <p>Email: info@mywebsite.com</p>
        <p>Phone: +880 15-459890</p>
        <p>Location: Dhaka, Bangladesh</p>
      </section>

      <section className="section">
        <h2>Send a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;