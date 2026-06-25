// import { FaRocket, FaSearch, FaSatellite } from "react-icons/fa";

// function Hero() {
//   return (
//     <section className="hero" id="hero">

//       <div className="container hero-container">

//         {/* Left Content */}

//         <div className="hero-content">

//           <span className="hero-badge">
//             <FaSatellite />
//             AI Powered Satellite Intelligence
//           </span>

//           <h1>
//             Cross-Modal
//             <span> Satellite Image </span>
//             Retrieval Platform
//           </h1>

//           <p>
//             Upload Optical, SAR or Multispectral satellite images and
//             retrieve the most similar images using Artificial Intelligence,
//             Deep Learning and Computer Vision.
//           </p>

//           <div className="hero-buttons">

//             <button className="primary-btn">
//               <FaRocket />
//               Get Started
//             </button>

//             <button className="secondary-btn">
//               <FaSearch />
//               Explore Dataset
//             </button>

//           </div>

//           {/* Statistics */}

//           <div className="hero-stats">

//             <div className="stat-card">
//               <h2>50K+</h2>
//               <p>Satellite Images</p>
//             </div>

//             <div className="stat-card">
//               <h2>4</h2>
//               <p>Sensor Types</p>
//             </div>

//             <div className="stat-card">
//               <h2>98%</h2>
//               <p>Retrieval Accuracy</p>
//             </div>

//           </div>

//         </div>

//         {/* Right Side */}

//         <div className="hero-image">

//           <img
//             src="/images/satellite.png"
//             alt="Satellite"
//           />

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

import {
  FaRocket,
  FaSearch,
  FaSatellite,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Background */}

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        {/* Left Side */}

        <div className="hero-left">

          <div className="hero-badge">

            <FaSatellite />

            <span>AI Powered Satellite Intelligence</span>

          </div>

          <h1>
            Cross-Modal
            <span> Satellite Image Retrieval </span>
            Platform
          </h1>

          <p>
            Search and retrieve similar satellite images across
            Optical, SAR and Multispectral sensors using
            Artificial Intelligence, Computer Vision and
            Deep Learning.
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

        <div className="hero-right">

          <img
            src="/images/satellite.png"
            alt="Satellite"
            className="satellite-image"
          />

          <img
            src="/images/earth.png"
            alt="Earth"
            className="earth-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;