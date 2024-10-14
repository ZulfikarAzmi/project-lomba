import "./HeroStyles.css";

function Hero(props) {
  return (<>
    <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg}/>
    </div>

    <div className="hero-text">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-teks">{props.text}</p>
        <a href={props.url} className={props.btnClass}>
            {props.buttonText}
        </a>
    </div>
  </>)
}

export default Hero;
