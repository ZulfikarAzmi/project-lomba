import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <h1>Kirim Pesan Pada Kami!</h1>
            <form>
                <input placeholder="Nama" />
                <input placeholder="Email" />
                <input placeholder="Subjek" />
                <textarea rows="4" placeholder="Pesan" />
                <button>Kirim Pesan</button>
            </form>
        </div>
    )
}

export default ContactForm;