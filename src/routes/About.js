import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/background.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Surabaya"
        text="Surabaya: Kota Penuh Sejarah dan Budaya"
        url="/"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer />
    </>
  );
}

export default About;
