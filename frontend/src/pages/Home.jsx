import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import SearchButton from "../components/SearchButton";
import ResultGrid from "../components/ResultGrid";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <section className="upload-section">
          <div className="container">
            <UploadBox />
            <SearchButton />
          </div>
        </section>

        <section className="result-section">
          <div className="container">
            <ResultGrid />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;