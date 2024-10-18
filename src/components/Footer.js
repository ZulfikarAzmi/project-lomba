import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Surabaya Trip</h1>
                    <p>
                    Choose your destination, discover new adventures!
                    </p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div> 
            </div>

            <div className="bottom">
                <div>
                    <h4>Contact Us</h4>
                    <a href="/">SurabayaTrip Team</a>
                    <a href="/"></a>
                    <a href="/">Surabaya, East Java</a>
                    <a href="/">Indonesia</a>
                    <a href="/">(+62) 858-9549-8213</a>
                </div>


                <div>
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/service">Service</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="disclaimer">
                    <h4>Copyright & Disclaimer</h4>
                    <a href="/">© 2024 Surabaya Trip. All rights reserved.</a>
                    <a href="/">The information on this site is for general informational purposes only.</a>
                 
                </div>
            </div>
        </div>
    )
}

export default Footer;
