import "./testimonials.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic5 from "../../img/profile5.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi? Sapiente iure perspiciatis quos exercitationem, delectus atque veniam id quaerat at cum dolore rerum tempore. Saepe distinctio nam sint ipsam!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi? Sapiente iure perspiciatis quos exercitationem, delectus atque veniam id quaerat at cum dolore rerum tempore. Saepe distinctio nam sint ipsam!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi? Sapiente iure perspiciatis quos exercitationem, delectus atque veniam id quaerat at cum dolore rerum tempore. Saepe distinctio nam sint ipsam!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi? Sapiente iure perspiciatis quos exercitationem, delectus atque veniam id quaerat at cum dolore rerum tempore. Saepe distinctio nam sint ipsam!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work </span>
        <span>from me...</span>
      </div>
      {/* slider  */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
