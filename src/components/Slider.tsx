
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {  Pagination, Autoplay } from 'swiper/modules';

const Slider = ({images}) => {

  return (
    <>
    <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {
           images.map((i)=>(
            <SwiperSlide key={i}>
                <img src={i} alt="" />
            </SwiperSlide>
           ))
          }
        </Swiper>
     
  </>
  )
}

export default Slider
