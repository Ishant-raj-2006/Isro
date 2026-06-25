import { FaSatellite, FaDatabase, FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-container">

        {/* Logo */}

        <div className="logo">

          <FaSatellite className="logo-icon" />

          <div>
            <h2>ISRO AI</h2>
            <span>Cross-Modal Image Retrieval</span>
          </div>

        </div>

        {/* Navigation */}

        <ul className="nav-links">

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

        {/* Status */}

        <div className="nav-status">

          <div className="status-item">
            <FaRobot />
            <span>AI Ready</span>
          </div>

          <div className="status-item">
            <FaDatabase />
            <span>Database Online</span>
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;