import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/Header-Logo.svg";
import btnImg from "../assets/Clone ButtonHeader.png"
const Header = () => {
  return (
    <header className="">
      <div className="container header">
        <img src={HeaderLogo} alt="" />
        <div className="navOuter">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/company">Company</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="">Contact us</NavLink>
          </nav>
          <button>
            <img src={btnImg} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
} 

export default Header