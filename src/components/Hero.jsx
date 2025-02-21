const Hero = ({ title = "Hi", subtitle = "Hello" }) => {
  return (
    <>
      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>Welcome to Kashmir</h1>
          <h2>
            "Beauty of <span className="style2">Kashmir</span> can not be compared
            by the Whole World"
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            <i className="bx bx-chevrons-down"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
