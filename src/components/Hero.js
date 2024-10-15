import "./HeroStyles.css";

// function Hero(props) {
//   return (<>
  
//     <div className={props.cName}>
//         <img alt="HeroImg" src={props.heroImg}/>
//     </div>

//     <div className="hero-text">
//         <h1 className="hero-title">{props.title}</h1>
//         <p>{props.text}</p>
//         <a href={props.url} className={props.btnClass}>
//             {props.buttonText}
//         </a>
//     </div>

//   </>)
// }

function Hero(props) {
  return (
    <div className="hero">
      <img alt="HeroImg" src={props.heroImg} />
      <div className="overlay"></div> {/* Tambahkan overlay di sini */}
      <div className="hero-text">
        <h1 className="hero-title">{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={`show ${props.btnClass}`}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}


export default Hero;
