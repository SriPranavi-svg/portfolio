import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h3>Hello 👋</h3>

        <h1>
          I'm <span className="highlight">Sri Pranavi Rao</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p>
          Passionate about Web Development, Java, Python, and creating
          innovative software solutions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/
SriPranavi-svg
"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sri-pranavi-rao-kachavarapu"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;