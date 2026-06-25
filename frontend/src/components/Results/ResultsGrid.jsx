import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSatelliteDish,
  FaArrowRight,
} from "react-icons/fa";

function ResultGrid() {

  const results = [
    {
      id: 1,
      image: "/images/optical.jpg",
      similarity: "98.6%",
      sensor: "Optical",
      location: "New Delhi, India",
      date: "12 Jan 2026",
    },
    {
      id: 2,
      image: "/images/sar.jpg",
      similarity: "96.8%",
      sensor: "SAR",
      location: "Mumbai, India",
      date: "08 Feb 2026",
    },
    {
      id: 3,
      image: "/images/multispectral.jpg",
      similarity: "95.2%",
      sensor: "Multispectral",
      location: "Jaipur, India",
      date: "20 Mar 2026",
    },
    {
      id: 4,
      image: "/images/results-placeholder.jpg",
      similarity: "93.9%",
      sensor: "Optical",
      location: "Chennai, India",
      date: "15 Apr 2026",
    },
  ];

  return (
    <section className="results-section" id="results">

      <div className="container">

        <div className="results-header">

          <h2>Retrieved Images</h2>

          <p>
            Top matching satellite images retrieved using
            AI-powered Cross-Modal Search.
          </p>

        </div>

        <div className="results-grid">

          {results.map((item) => (

            <div className="result-card" key={item.id}>

              <img
                src={item.image}
                alt={item.sensor}
                className="result-image"
              />

              <div className="result-content">

                <span className="similarity">
                  Match : {item.similarity}
                </span>

                <h3>{item.sensor}</h3>

                <p>
                  <FaMapMarkerAlt />
                  {item.location}
                </p>

                <p>
                  <FaCalendarAlt />
                  {item.date}
                </p>

                <p>
                  <FaSatelliteDish />
                  Sensor : {item.sensor}
                </p>

                <button className="view-btn">

                  View Details

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ResultGrid;