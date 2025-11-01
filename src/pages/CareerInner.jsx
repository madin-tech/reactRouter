import arrow from "../assets/IconArrow.png";
import btnShape from "../assets/btnShapes.svg";
const CareerInner = () => {
  return (
    <section className=" cInnerPg container">
      <div className="servicePgLeft" style={{margin:`0`}}>
        <h6>CAREER AT Ether</h6>
        <h1>Full Stack Developer</h1>
        <h6>
          Through True Rich Attended does no end it his mother <br /> since real
          had half every him case in packages.
        </h6>
        <button>
          <img src={btnShape} className="btnShape" alt="" />
          Request Quote
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className="cInnerLeft">
        <h3>Job Description</h3>
        <h5>Department: Product Engineering</h5>
        <h5>Department: Product Engineering</h5>
        <h5>Department: Product Engineering</h5>
      </div>
    </section>
  );
};

export default CareerInner;
