import { Link } from "react-router-dom";
import footerShape from "../assets/FooterShape.png";
import footerArrow from "../assets/footerArrow.png";
import squareShape from "../assets/squareShape.png";
import footerLogo from "../assets/footerLogo.svg";
import icon from "../assets/icon.png";
const Footer = () => {
  return (
    <footer>
      <div className=" footerTop container">
        <div className="footerLeft ">
          <img src={footerShape} alt="" />
          <h2>
            Let's make <br /> something special
          </h2>
          <h6>Let's talk! 🤙 </h6>
          <div className="footerContact">
            <a href="">020 7993 2905</a>
            <a href="">hi@finsweet.com</a>
          </div>
          <p>
            DLF Cybercity, Bhubaneswar, <br /> India, &52050
          </p>
        </div>
        <div className="footerRight">
          <div className="footerLinks">
            <div className="footerLink">
              <Link to="/" className="bold">
                Home
              </Link>
              <Link to="" className="bold">
                Service
              </Link>
              <Link to="" className="bold">
                Company
              </Link>
              <Link to="" className="bold">
                Career
              </Link>
              <Link to="" className="bold">
                Blog
              </Link>
              <Link to="" className="bold">
                Contact us
              </Link>
            </div>
            <div className="footerLink">
              <a href="" className="bold">
                Service
              </a>
              <a href="/">Home</a>
              <a href="">Company</a>
              <a href="">Career</a>
              <a href="">Blog</a>
              <a href="">Contact us</a>
            </div>
            <div className="footerLink">
              <a href="" className="bold">
                Home
              </a>
              <a href="">Service</a>
              <a href="">Company</a>
              <a href="">Career</a>
              <a href="">Blog</a>
              <a href="">Contact us</a>
            </div>
          </div>
          <div className="footerLinkBottom">
            <img src={squareShape} alt="" />
            <button>
              Contact Us
              <img src={footerArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className=" footerBottomBox container">
          <div className="footerBottomLeft">
            <img src={footerLogo} alt="" />
            <p>©2021 Finsweet</p>
          </div>
          <div className="footerIcons">
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer