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
        text="Explore the beauty of Surabaya"
        url="/"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer />
    </>
  );
}

export default About;
