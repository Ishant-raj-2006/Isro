import {
  FaBrain,
  FaDatabase,
  FaSatellite,
  FaSearch,
} from "react-icons/fa";

function StatusCard() {
  return (
    <section className="dashboard" id="dashboard">

      <div className="container">

        <div className="dashboard-header">

          <h2>AI System Dashboard</h2>

          <p>
            Real-time overview of the Cross-Modal Satellite Image
            Retrieval Platform.
          </p>

        </div>

        <div className="dashboard-grid">

          {/* Card 1 */}

          <div className="dashboard-card">

            <FaBrain className="dashboard-icon" />

            <h3>AI Model</h3>

            <p>DINOv2 / PyTorch</p>

            <span className="status online">
              ● Active
            </span>

          </div>

          {/* Card 2 */}

          <div className="dashboard-card">

            <FaDatabase className="dashboard-icon" />

            <h3>Vector Database</h3>

            <p>FAISS Retrieval Engine</p>

            <span className="status online">
              ● Ready
            </span>

          </div>

          {/* Card 3 */}

          <div className="dashboard-card">

            <FaSatellite className="dashboard-icon" />

            <h3>Sensor Support</h3>

            <p>
              Optical • SAR • Multispectral
            </p>

            <span className="status online">
              ● Connected
            </span>

          </div>

          {/* Card 4 */}

          <div className="dashboard-card">

            <FaSearch className="dashboard-icon" />

            <h3>Retrieval Engine</h3>

            <p>Cross-Modal Search</p>

            <span className="status online">
              ● Waiting for Query
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default StatusCard;