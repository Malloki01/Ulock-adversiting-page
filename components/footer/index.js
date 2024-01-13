import { AppWrap, MotionWrap } from "../wrapper";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsEnvelopeFill,
  BsCup,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div class="container">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h2>Use the following contact methods or fill out the form</h2>
              <h5>Vía E-mail</h5>
              <p>ulock@gmail.com</p>
              <h5>On our social media channels</h5>
              <p>@unsitiogenial</p>
              <h5>By phone</h5>
              <p>91-1234-567</p>
            </div>
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <form action="#">
                <h1 class="lg-view">Contact us</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <input type="text" placeholder="Write your name *" />
                <input type="email" placeholder="Write your Email *" />
                <input type="text" placeholder="Write your phone *" />
                <textarea rows="4" placeholder="Write your Message *"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
