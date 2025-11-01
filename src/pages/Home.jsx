import arrow from "../assets/IconArrow.png";
import btnShape from "../assets/BtnShapes.svg";
import heroPgImg from "../assets/heroPgImg.png";
import heroPgImgBg1 from "../assets/heroPgImgBg1.png";
import heroPgImgBg2 from "../assets/heroPgImgBg2.png";
import union from "../assets/Union.png";
const Home = () => {
  return (
    <section className="homePg">
      <div className="container">
        <div className="homeMid">
          <div className="homePgLeft">
            <h1>
              Transform Your Idea <br /> Into Reality with <br /> Finsweet
            </h1>
            <h6>
              The entire Finsweet team knows what's good with Webflow and <br />{" "}
              you can too with 1 week and a good attitude.
            </h6>
            <button>
              <img src={btnShape} className="btnShape" alt="" />
              Request Quote
              <img src={arrow} alt="" />
            </button>
          </div>
          <div className="homePgRight">
            <img src={heroPgImgBg1} className="heroBg1" alt="" />
            <img src={heroPgImg} className="heroImg" alt="" />
            <img src={heroPgImgBg2} className="heroBg2" alt="" />
          </div>
        </div>
        <div className="homePgBottom">
          <div className="homePgBottomLeft">
            <h6>Our Clients</h6>
            <h4>We've Worked with</h4>
          </div>
          <img src={union} alt="" />
          <img src={union} alt="" />
          <img src={union} alt="" />
          <img src={union} alt="" />
          <img src={union} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home