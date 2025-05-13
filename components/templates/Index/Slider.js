import React from "react";
import styles from "@/styles/Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      // rewind={true}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className={styles.swiper}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/img/carousel-1.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/img/carousel-2.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
