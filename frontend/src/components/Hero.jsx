function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-left">

          <h1>
            Cross-Modal
            <span> Satellite Image Retrieval</span>
          </h1>

          <p>
            Upload Optical, SAR or Multispectral satellite images and
            retrieve the most similar images using Artificial Intelligence.
          </p>

          <button className="hero-btn">
            Explore AI Retrieval
          </button>

        </div>

        <div className="hero-right">
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