import Toggle from "../toggle/Toggle";
import "./navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Merna</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              // activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              // activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portofolio"
              smooth={true}
              // activeClass="activeClass"
            >
              <li>Portofolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              // activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
