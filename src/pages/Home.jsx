import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>We create modern and professional digital solutions.</p>
        <Link to="/services" className="btn">
          Explore Services
        </Link>
      </section>

      <section className="section">
        <h2>Who We Are</h2>
        <p>We are a creative team passionate about technology.</p>
      </section>

      <section className="section light">
        <h2>What We Do</h2>
        <p>We provide web development and digital services.</p>
      </section>

      <section className="section">
        <h2>Why Choose Us?</h2>
        <p>We focus on quality, creativity, and customer satisfaction.</p>
      </section>
    </>
  );
}

export default Home;