import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🇨🇴</h2>

      <div className="contact__info">
        <p>Mail me at 📬</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:huergocode@proton.me"
            target="_blank"
            rel="noreferrer"
          >
            huergocode@proton.me
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me</p>

        <div className="app__social__links">
          <a
            href="https://www.linkedin.com/in/jorge-huergo-ab5a84235/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://www.instagram.com/jluiso315/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
