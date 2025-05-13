// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../../styles/Slider.module.css';

// Import Swiper styles
// import required modules
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Comments = ({ comments }) => {
  
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {comments &&
              comments.length > 0 &&
              comments.map((comment) => (
                <SwiperSlide key={comment.id}>
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid"
                        width={100}
                        src={comment.img}
                        alt={comment.name}
                      />
                      <div className="ml-3">
                        <h4>{comment.name}</h4>
                        <p className="text-left mb-0">User</p>
                      </div>
                    </div>
                    <p className="m-0 mb-4">{comment.text}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;
