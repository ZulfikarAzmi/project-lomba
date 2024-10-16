import TuguPahlawan from "../assets/TuguPahlawan.jpeg";
import KebunBinatang from "../assets/KebunBinatang.jpg";
import Monkasel from "../assets/Monkasel.jpg";
import Suramadu from "../assets/Suramadu.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1 style={{ fontSize: '45px', color: 'var(--body_color)', background: 'var(--body_background)'}}>Explore Surabaya: The Heart of East Java</h1>
      <p style={{ color: 'var(--body_color)', background: 'var(--body_background)' }}>Discover Surabaya's iconic landmarks and must-visit attractions, from historical sites to cultural hotspots</p>

      <DestinationData
        className="first-des"
        heading="Surabaya"
        text="Surabaya, the second largest city in Indonesia and the bustling capital of East Java province, is renowned for its rich cultural heritage, diverse and delicious cuisine, and vibrant atmosphere that reflects a perfect blend of tradition and modernity."
        img1={TuguPahlawan}
        img2={KebunBinatang}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Surabaya"
        text="Surabaya offers notable attractions like the Surabaya Zoo, Southeast Asia's oldest, and Monkasel, the Submarine Monument, showcasing Indonesia's naval history. The Tugu Pahlawan (Heroes Monument) is a must-visit landmark honoring the city's role in the independence struggle."
        img1={Monkasel}
        img2={Suramadu}
      />
    </div>
  );
};

export default Destination;
