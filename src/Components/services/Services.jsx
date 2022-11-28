import React from "react";
import "./services.scss";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./Merna Nabil Mahmoud Fouad.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services-wrapper" id="Services">
      {/* left side  */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Building amazing UI interactive reusable components <br /> with pixel
          perfect and dry code
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right side  */}
      <motion.div
        whileInView={{ left: "14rem" }}
        initial={{ left: "25%" }}
        transition={transition}
        className="cards"
      >
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"UI Develop"}
            detail={"Pixel perfect ,Dry code , Animation "}
          />
        </div>

        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"Languages"}
            detail={"HTML ,CSS, Javascript, React "}
          />
        </div>

        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"GitHub"}
            detail={"Able to work with a team and merge all project together "}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
