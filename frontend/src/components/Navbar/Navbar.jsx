// import { FaSatellite, FaDatabase, FaRobot } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="container nav-container">

//         {/* Logo */}

//         <div className="logo">

//           <FaSatellite className="logo-icon" />

//           <div>
//             <h2>ISRO AI</h2>
//             <span>Cross-Modal Image Retrieval</span>
//           </div>

//         </div>

//         {/* Navigation */}

//         <ul className="nav-links">

//           <li>
//             <a href="#hero">Home</a>
//           </li>

//           <li>
//             <a href="#dashboard">Dashboard</a>
//           </li>

//           <li>
//             <a href="#upload">Upload</a>
//           </li>

//           <li>
//             <a href="#results">Results</a>
//           </li>

//         </ul>

//         {/* Status */}

//         <div className="nav-status">

//           <div className="status-item">
//             <FaRobot />
//             <span>AI Ready</span>
//           </div>

//           <div className="status-item">
//             <FaDatabase />
//             <span>Database Online</span>
//           </div>

//         </div>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSatellite,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <div className="logo">

          <img
            src="/images/logo.png"
            alt="ISRO Logo"
          />

          <div className="logo-text">

            <h2>ISRO AI</h2>

            <span>Cross-Modal Retrieval</span>

          </div>

        </div>

        {/* Navigation */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <a href="#hero">Home</a>

          <a href="#dashboard">Dashboard</a>

          <a href="#upload">Upload</a>

          <a href="#results">Results</a>

          <a href="#footer">Contact</a>

        </nav>

        {/* Right */}

        <div className="nav-right">

          <div className="status-box">

            <FaRobot />

            <span>AI Ready</span>

          </div>

          <div className="status-box">

            <FaDatabase />

            <span>Online</span>

          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;