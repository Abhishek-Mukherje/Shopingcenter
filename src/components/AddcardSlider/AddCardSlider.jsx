import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import BannerBox from '../Banner/BannerBox';




function AddCardSlider(props) {
    return (
        <div className=' w-full  bg-white '>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Autoplay]}autoplay={{
                    delay: 2500, disableOnInteraction: false,
                }}
                className="mySwiper container h-[300px] bg-white  "
            >
                <SwiperSlide>
                    <BannerBox img={'/banner/banner1.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={'/banner/banner2.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={'/banner/banner3.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={'/banner/banner4.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={'/banner/banner1.webp'} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AddCardSlider