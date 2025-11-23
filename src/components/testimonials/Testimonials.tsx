import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide key={id} className="testimonial__card">
            <img src={image} alt={title} className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
