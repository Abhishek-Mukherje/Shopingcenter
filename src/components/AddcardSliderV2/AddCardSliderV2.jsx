import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import BannerBoxV2 from '../Banner/BannerBoxV2.jsx';




function AddCardSlider(props) {
    return (
        <div className=' w-full '>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Autoplay]}autoplay={{
                    delay: 2500, disableOnInteraction: false,
                }}
                className=" mySwiper h-[300px] bg-white  "
            >
                <SwiperSlide>
                    <BannerBoxV2 img={'/banner/banner1.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 img={'/banner/banner2.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 img={'/banner/banner3.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 img={'/banner/banner4.webp'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 img={'/banner/banner1.webp'} />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AddCardSlider