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
        breakpoint: 850, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="trip" id="destination">
      <h1>Destinasi Populer di Surabaya</h1>
      <p>Jelajahi tempat-tempat menarik di Surabaya yang paling banyak dikunjungi wisatawan.</p>
      <Slider {...settings}>
        <TripData
          image={TuguPahlawan}
          heading="Tugu Pahlawan"
          text="menjadi monumen ikonik di Surabaya yang dibangun untuk mengenang perjuangan pahlawan dalam pertempuran 10 November 1945. Monumen ini menjadi simbol keberanian rakyat Surabaya dalam mempertahankan kemerdekaan Indonesia."
        />
        <TripData
          image={KebunBinatang}
          heading="Kebun Binatang Surabaya"
          text="Kebun Binatang Surabaya adalah salah satu yang tertua dan terbesar di Asia Tenggara. Tempat ini menjadi destinasi wisata keluarga, menampilkan berbagai spesies satwa dari seluruh dunia untuk tujuan edukasi dan hiburan."
        />
        <TripData
          image={Monkasel}
          heading="Monumen Kapal Selam"
          text="Monumen Kapal Selam adalah museum yang menampilkan KRI Pasopati 410,7 Pengunjung dapat melihat langsung bagian dalam kapal dan mempelajari sejarahnya sebagai bagian penting pertahanan laut Indonesia."
        />
        <TripData
          image={TamanBungkul}
          heading="Taman Bungkul"
          text="Taman Bungkul di Surabaya adalah salah satu taman ikonikdi surabaya dengan fasilitas jogging track, skate park, area bermain anak, dan panggung terbuka. Taman ini menjadi tempat favorit untuk bersantai dan berkumpul masyarakat."
        />
         <TripData
          image={Suramadu}
          heading="Jembatan Suramadu"
          text="merupakan jembatan terpanjang di Indonesia yang menghubungkan Surabaya dengan Pulau Madura. Panjangnya sekitar 5,4 km dan berfungsi sebagai akses utama untuk memudahkan transportasi antara kedua wilayah."
        />
         <TripData
          image={Masjid}
          heading="Masjid Al-Akbar, Surabaya"
          text="dikenal sebagai Masjid Agung Surabaya, merupakan masjid terbesar di Jawa Timur dan salah satu masjid terbesar di Indonesia. Dikenal dengan arsitektur megah dan kubah birunya, memiliki menara pandang yang menawarkan pemandangan kota."
        />
        <TripData
          image={Museum}
          heading="Heroes Museum, Surabaya"
          text="didedikasikan untuk mengenang perjuangan rakyat Surabaya dalam mempertahankan kemerdekaan Indonesia, museum ini menampilkan berbagai artefak, foto, dan sejarah yang mendalam tentang perjuangan para pahlawan."
        />
        <TripData
          image={KotaTua}
          heading="Kota Tua, Surabaya"
          text="Kota Tua Surabaya adalah kawasan bersejarah dengan bangunan peninggalan kolonial Belanda yang berada di sekitar Jembatan Merah. Kawasan ini menjadi saksi perkembangan Surabaya sebagai pusat perdagangan di masa lalu."
        />
        
        </Slider>
    </div>
  );
}


export default Trip;
