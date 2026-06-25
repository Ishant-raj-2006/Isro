import { FaRocket, FaSearch, FaSatellite } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="container hero-container">

        {/* Left Content */}

        <div className="hero-content">

          <span className="hero-badge">
            <FaSatellite />
            AI Powered Satellite Intelligence
          </span>

          <h1>
            Cross-Modal
            <span> Satellite Image </span>
            Retrieval Platform
          </h1>

          <p>
            Upload Optical, SAR or Multispectral satellite images and
            retrieve the most similar images using Artificial Intelligence,
            Deep Learning and Computer Vision.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              <FaRocket />
              Get Started
            </button>

            <button className="secondary-btn">
              <FaSearch />
              Explore Dataset
            </button>

          </div>

          {/* Statistics */}

          <div className="hero-stats">

            <div className="stat-card">
              <h2>50K+</h2>
              <p>Satellite Images</p>
            </div>

            <div className="stat-card">
              <h2>4</h2>
              <p>Sensor Types</p>
            </div>

            <div className="stat-card">
              <h2>98%</h2>
              <p>Retrieval Accuracy</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <img
            src="/images/satellite.png"
            alt="Satellite"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;