import "./portofolio.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portofolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portofolio">
      {/* heading  */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portofolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="HOC" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portofolio;
