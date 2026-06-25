function ResultGrid() {

  const demoResults = [
    "/images/optical.jpg",
    "/images/sar.jpg",
    "/images/multispectral.jpg",
    "/images/results-placeholder.jpg",
  ];

  return (
    <section className="results">

      <h2>Retrieved Images</h2>

      <div className="result-grid">

        {demoResults.map((image, index) => (

          <div
            className="result-card"
            key={index}
          >

            <img
              src={image}
              alt={`Result ${index + 1}`}
            />

            <p>Similarity: {(98 - index * 5)}%</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ResultGrid;