import "./intro.scss";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Me from "../../img/me.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Navbar">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I am </span>
          <span>Merna Nabil</span>
          <span>
            Frontend Developer with a good level of experience in web design and
            development , producting the Quality work
          </span>
        </div>
        <button className="i-button button">Hire Me!</button>

        <div className="i-icon">
          <a
            href="https://github.com/Merna-Nabil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mernanok/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>

          <a
            href="https://www.instagram.com/mernanok/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Me} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floatings"
        >
          <FloatingDiv image={Crown} txt1="web" txt2="developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floatings2"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design " txt2="Award" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
