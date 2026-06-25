import { FaSatellite } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="ISRO Logo" />
          <h2>ISRO AI Retrieval</h2>
        </div>

        {/* Navigation */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Dataset</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Documentation</a></li>
        </ul>

        {/* Status */}
        <button className="status-btn">
          <FaSatellite />
          AI Ready
        </button>

      </div>
    </nav>
  );
}

export default Navbar;