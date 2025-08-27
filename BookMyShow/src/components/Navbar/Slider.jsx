import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

 function Slider({ banners }) {
  return (
    <div className="w-full px-40 py-9">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg shadow-lg"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner}
              alt={`banner-${index}`}
              className="w-full flex h-[800px] md:h-[500px] object-cover rounded-lg "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;