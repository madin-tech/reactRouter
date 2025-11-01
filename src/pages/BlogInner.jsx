import img from "../assets/companyShape1.png";
import arrow from "../assets/footerArrow.png";
import avatar from "../assets/avatar.png";


const BlogInner = () => {
  return (
    <section className="blogInner container">
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
        
      </div>
    </section>
  );
};

export default BlogInner;
