import { useNavigate } from "react-router-dom";
import careerImg from "../assets/careerImg.png";

const Career = () => {
    const navigate = useNavigate();
 function handleClick() {
        navigate("/career/inner");
    }
  return (
    <section className=" careerPg container">
      <h6>CAREER AT FINSWEET</h6>
      <h1>
        We hired people who are <br /> Always Passionate about <br /> what they
        do
      </h1>
      <h6>
        Through True Rich Attended does no end it his mother since real had half{" "}
        <br />
        every him case in packages enquire we up ecstatic unsatiable saw .
      </h6>
      <img src={careerImg} onClick={handleClick} alt="" />
      <h6>See Our open positions </h6>
    </section>
  );
}

export default Career