import "./works.scss";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works services-wrapper">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          works for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          Building amazing UI interactive reusable components with pixel
          <br />
          building amazing UI interactive reusable components
          <br />
          building amazing UI interactive reusable components amazing UI
          <br />
          building amazing UI components
        </span>

        <button className="button s-button">Hire me!</button>
      </div>
      {/* right side  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maiaCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
