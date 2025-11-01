import img from "../assets/companyShape1.png";
import arrow from "../assets/footerArrow.png";
import avatar from "../assets/avatar.png";
import blogImg from "../assets/blogImg1.png";
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const navigate = useNavigate();
    function handleClick(){
    navigate("/blog/inner");
    }
  return (
    <section className="blogPg container">
      <div className="blogLeft">
        <img src={img} alt="" />
        <h6></h6>
        <h1>
          Breaking the code How <br /> did we build our Figma <br /> plugin{" "}
        </h1>
        <h6>
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout. The
          Maker is a decentralized. We <br /> aim to attain the.
        </h6>
        <div className="readMore">
          <a href="">Read More</a>
          <img src={arrow} alt="" />
        </div>

        <div className="avatarBox">
          <div className="avatar">
            <img src={avatar} alt="" />
            <p>Andrew Jonson</p>
          </div>
          <p>Posted on 27th January 2021</p>
        </div>
        <img src={blogImg} onClick={handleClick} alt="" />
      </div>
      <div className="blogRight">
        <div className="blogRightBox">
          <h3>
            Great design expectations <br /> prejudice in digital products
            <br /> in Next Year
          </h3>
          <div className="blogRightBoxBottom">
            <img src={avatar} alt="" />
            <div className="blogRightBoxBottomText">
              <p>Andrew Jonson</p>
              <p>Andrew Jonson</p>
            </div>
          </div>
        </div>
        <div className="blogRightBox">
          <h3>
            Great design expectations <br /> prejudice in digital products
            <br /> in Next Year
          </h3>
          <div className="blogRightBoxBottom">
            <img src={avatar} alt="" />
            <div className="blogRightBoxBottomText">
              <p>Andrew Jonson</p>
              <p>Andrew Jonson</p>
            </div>
          </div>
        </div>
        <div className="blogRightBox">
          <h3>
            Great design expectations <br /> prejudice in digital products
            <br /> in Next Year
          </h3>
          <div className="blogRightBoxBottom">
            <img src={avatar} alt="" />
            <div className="blogRightBoxBottomText">
              <p>Andrew Jonson</p>
              <p>Andrew Jonson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
