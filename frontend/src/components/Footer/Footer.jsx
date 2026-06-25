import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Left */}

        <div className="footer-left">

          <h2>ISRO AI Retrieval</h2>

          <p>
            Cross-Modal Satellite Image Retrieval Platform
            powered by Artificial Intelligence, Computer Vision,
            and Deep Learning.
          </p>

        </div>

        {/* Middle */}

        <div className="footer-middle">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#dashboard">Dashboard</a>
            </li>

            <li>
              <a href="#upload">Upload</a>
            </li>

            <li>
              <a href="#results">Results</a>
            </li>

          </ul>

        </div>

        {/* Right */}

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="social-links">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

            <a href="#">
              <FaGlobe />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ISRO Cross-Modal Satellite Image Retrieval.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;