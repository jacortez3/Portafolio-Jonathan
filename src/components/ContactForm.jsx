import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Contactame!</h1>
        <p>
          Enviame un {" "}
          <a href="mailto:jonathancortez900@gmail.com">Correo</a>. 👋
          <br />
          <br />
          <h3>O Buscame:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            jonathancortez900@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +593 9889 12907
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Quito / Ecuador
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Tu nombre"
            required
          />
          <input type="text" name="senderEmail" placeholder="Correo" required />
          <input type="text" name="subject" placeholder="Asunto" required />
          <textarea
            placeholder="Tu Mensaje"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
