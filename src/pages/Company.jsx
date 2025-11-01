import shap1 from "../assets/companyShape1.png";
import shap2 from "../assets/companyShape2.png";
import img1 from "../assets/companyimg3.png";
import img2 from "../assets/companyimg2.png";
import img3 from "../assets/companyimg3.png";
const Company = () => {
  return (
    <section className="container">
      <div className="companyTop">
        <img src={shap1} alt="" />
        <img src={shap2} alt="" />
      </div>
      <div className="companyTexts">
        <h6>Company</h6>
        <h1>
          Award-winning Company <br /> seen and used by millions <br /> around
          the world.
        </h1>
        <h6>
          It is a long established fact that a reader will be distracted by the
          readable content of a <br /> page when looking at its layout. The
          Maker is a decentralized.{" "}
        </h6>
      </div>
      <div className="companyImgs">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </section>
  );
}

export default Company