import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/city.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip/>
      <Footer />
    </>
  );
}

export default Service;
