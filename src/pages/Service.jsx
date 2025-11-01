import arrow from "../assets/IconArrow.png";
import btnShape from "../assets/btnShapes.svg";


const Service = () => {
  return (
    <section>
      <div className="servicePg">
        <div className="container serviceMid">
          <div className="servicePgLeft">
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
          <div className="serviceRight">
            <h3>Technical support</h3>
            <h3>Technical support</h3>
            <h3>Technical support</h3>
            <h3>Technical support</h3>
            <h3>Technical support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
