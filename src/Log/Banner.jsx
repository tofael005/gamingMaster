
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import ban1 from "../assets/banner/ban1.jpg"
import ban2 from "../assets/banner/ban2.jpg"
import ban3 from "../assets/banner/ban3.jpg"
import { Link } from 'react-router-dom';

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
        className="mySwiper md:h-[85vh]"
      >
        <SwiperSlide>
          <div className='flex gap-10'>
            <img className='object-cover relative md:h-full md:w-full' src={ban1} alt="" />
            <div className='absolute text-white px-3 left-0 top-0 text-center w-full h-full
             bg-black/60 backdrop-brightness-100"'>
              <p className='md:mt-36 mt-4 text-red-400 font-semibold'>Proved By prodesigner</p>
              <h1 className='md:text-5xl font-bold md:my-5 text-2xl'>Work that we produce for our clients</h1>
              <p className='text-transparent md:text-white'>Play the game, learn, thrive, and repeat. Be calm, be a gamer, be a game lover. Life is too short to play a bad game. The future is a game.</p>
              <Link to="/about">
                <input className='cursor-pointer absolute top-[70px] right-[95px] md:right-[626px] md:top-[300px] hover:bg-[#221F39] mt-12 duration-300 md:text-xl hover:text-blue-400 font-semibold bg-blue-900 px-7 py-2 rounded' type="button" value="Get more details" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className='object-cover relative md:h-full md:w-full' src={ban2} alt="" />
            <div className='absolute text-white px-3 left-0 top-0 text-center w-full h-full
             bg-black/60 backdrop-brightness-100"'>
              <p className='md:mt-36 mt-4 text-red-400 font-semibold'>Proved By prodesigner</p>
              <h1 className='md:text-5xl font-bold md:my-5 text-2xl'>Forge Your Destiny, Conquer the Challenge</h1>
              <p className='text-transparent md:text-white'>Play the game, learn, thrive, and repeat. Be calm, be a gamer be a game lover. Life is too short to play a bad game. The future is a game.</p>
              <Link to="/about">
                <input className='cursor-pointer absolute top-[70px] right-[95px] md:right-[626px] md:top-[300px] hover:bg-[#221F39] mt-12 duration-300 md:text-xl hover:text-blue-400 font-semibold bg-blue-900 px-7 py-2 rounded' type="button" value="Get more details" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className='object-cover relative md:h-full md:w-full' src={ban3} alt="" />
            <div className='absolute text-white px-3 left-0 top-0 text-center w-full h-full
             bg-black/60 backdrop-brightness-100"'>
              <p className='md:mt-36 mt-4 text-red-400 font-semibold'>Proved By prodesigner</p>
              <h1 className='md:text-5xl font-bold md:my-5 text-2xl'>Gaming Redefined, Adventure Refined</h1>
              <p className='text-transparent md:text-white'>Play the game, learn, thrive, and repeat. Be calm, be a gamer, be a game lover. Life is too short to play a bad game. The future is a game.</p>
              <Link to="/about">
                <input className='cursor-pointer absolute top-[70px] right-[95px] md:right-[626px] md:top-[300px] hover:bg-[#221F39] mt-12 duration-300 md:text-xl hover:text-blue-400 font-semibold bg-blue-900 px-7 py-2 rounded' type="button" value="Get more details" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;