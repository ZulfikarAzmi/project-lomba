import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HeroImage from "../assets/surabaya1.jpeg"

function Home() {
  return (
    <>
        <Navbar />
        <Hero 
            cName="hero"
            heroImg={HeroImage}
            title="Welcome to Surabaya"
            text="Jelajahi Keindahan Surabaya"
            url="/"
            btnClass="show"
            buttonText="Lihat Destinasi"
        />
        <Destination />
        <Trip />
        <Footer />
    </>
  )
}

export default Home;
