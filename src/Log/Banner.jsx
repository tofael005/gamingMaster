
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import ban1 from "../assets/banner/ban1.jpg"
import ban2 from "../assets/banner/ban2.jpg"
import ban3 from "../assets/banner/ban3.jpg"

const Banner = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh]"
      >
        <SwiperSlide><img className='object-cover md:h-full md:w-full' src={ban1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-cover md:h-full md:w-full' src={ban2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='object-cover md:h-full md:w-full' src={ban3} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;