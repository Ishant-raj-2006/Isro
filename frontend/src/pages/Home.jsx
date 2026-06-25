import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import StatusCard from "../components/Dashboard/StatusCard";
import UploadBox from "../components/Upload/UploadBox";
import ResultsGrid from "../components/Results/ResultsGrid";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatusCard />
      <UploadBox />
      <ResultsGrid />
      <Footer />
    </>
  );
}

export default Home;