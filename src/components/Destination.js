import TuguPahlawan from "../assets/TuguPahlawan.jpeg";
import KebunBinatang from "../assets/KebunBinatang.jpg";
import Monkasel from "../assets/Monkasel.jpg";
import Suramadu from "../assets/Suramadu.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1 style={{ fontSize: '45px', color: 'var(--body_color)', background: 'var(--body_background)'}}>Surabaya: Kota Penuh Sejarah dan Budaya</h1>
      <p style={{ color: 'var(--body_color)', background: 'var(--body_background)' }}>Temukan berbagai destinasi wisata menarik yang mencerminkan sejarah dan budaya Surabaya.</p>

      <DestinationData
        className="first-des"
        heading="Surabaya"
        text="Surabaya adalah ibu kota Provinsi Jawa Timur dan kota terbesar kedua di Indonesia. Terletak di pesisir timur Pulau Jawa, kota ini merupakan pusat bisnis, pendidikan, dan industri dengan sejarah penting dalam perjuangan kemerdekaan Indonesia."
        img1={TuguPahlawan}
        img2={KebunBinatang}
      />

      <DestinationData
        className="first-des-reverse"
        heading=""
        text="Surabaya memiliki potensi besar di sektor perdagangan, industri, dan pariwisata. Dengan kawasan industri dan pelabuhan besar, kota ini mendukung aktivitas ekonomi nasional. Surabaya juga menawarkan wisata sejarah dan alam, menjadikannya pusat perkotaan yang terus berkembang di Indonesia."
        img1={Monkasel}
        img2={Suramadu}
      />
    </div>
  );
};

export default Destination;
