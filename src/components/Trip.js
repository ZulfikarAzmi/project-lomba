import "./TripStyles.css";
import TuguPahlawan from "../assets/TuguPahlawan.jpeg";
import KebunBinatang from "../assets/KebunBinatang.jpg";
import Monkasel from "../assets/Monkasel.jpg";
import TripData from "./TripData";
import TamanBungkul from "../assets/TamanBungkul.jpg";
import Suramadu from "../assets/Suramadu.jpg";
import Masjid from "../assets/Masjid.jpg";
import Museum from "../assets/museum.jpg";
import KotaTua from "../assets/KotaTua.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function Trip(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850, // untuk layar lebih kecil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="trip">
      <h1>Popular Destinations</h1>
      <p>Explore the iconic landmarks and hidden gems of Surabaya that showcase its rich culture and vibrant history.</p>
      <Slider {...settings}>
        <TripData
          image={TuguPahlawan}
          heading="Tugu Pahlawan, Surabaya"
          text="Tugu Pahlawan is a 41-meter monument honoring Surabaya's heroes in the independence struggle. Surrounded by gardens, it’s a must-visit landmark showcasing the city’s cultural heritage."
        />
        <TripData
          image={KebunBinatang}
          heading="Surabaya Zoo, Surabaya"
          text="Kebun Binatang Surabaya, one of Southeast Asia's oldest zoos, features a diverse range of animals across 15 hectares. It offers fun and educational experiences for families, making it a popular spot for nature lovers."
        />
        <TripData
          image={Monkasel}
          heading="Monkasel, Surabaya"
          text="Monkasel is a unique attraction in Surabaya featuring a retired Russian submarine. Visitors can explore it and learn about Indonesia's naval history, making it an engaging experience for all."
        />
        <TripData
          image={TamanBungkul}
          heading="Bungkul Park, Surabaya"
          text="A popular urban park for exercising and relaxing, featuring beautiful landscapes, lush greenery, and a vibrant atmosphere. It's perfect for jogging, picnicking, and enjoying local vibes."
        />
         <TripData
          image={Suramadu}
          heading="Suramadu Bridge, Surabaya"
          text="The Suramadu Bridge, Indonesia's longest, connects Surabaya to Madura Island and offers breathtaking sunset views. It's a great spot to enjoy local cuisine from nearby stalls."
        />
         <TripData
          image={Masjid}
          heading="Masjid Al-Akbar, Surabaya"
          text="Majid Al-Akbar, the largest mosque in Surabaya, is famous for its stunning architecture. Visitors can enjoy city views from its observation tower, enriching their cultural experience."
        />
        <TripData
          image={Museum}
          heading="Heroes Museum, Surabaya"
          text="The Heroes Museum showcases Indonesia's independence struggle, focusing on the events of November 10, 1945. It features exhibits honoring national heroes and their sacrifices."
        />
        <TripData
          image={KotaTua}
          heading="Kota Tua, Surabaya"
          text="The Old Town of Surabaya features colonial architecture and historical sites, reflecting the city’s rich heritage. Visitors can stroll through the area to explore its cultural significance and vibrant atmosphere."
        />
        
        </Slider>
    </div>
  );
}


export default Trip;
