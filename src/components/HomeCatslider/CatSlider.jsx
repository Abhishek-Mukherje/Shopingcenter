import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';







function CatSlider() {
    return (
        <div className='HomeCatslider'>
            <div className='container'>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                 
                    modules={[Navigation]}
                    className="mySwiper mt-10 "
                >
                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center flex items-center  flex-col justify-center"><img src="/slider/img1.jpg" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-3" >Smart Tablet</h3></div></Link></SwiperSlide>
                    

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center flex items-center flex-col justify-center"><img src="/slider/img2.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" >Electronics</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img3.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" >Bags</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img4.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" >Footwear</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img5.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" >Groceries</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img6.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" > Beauty</h3></div></Link></SwiperSlide>

                    
                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img7.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" > jewellery</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img7.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" > jewellery</h3></div></Link></SwiperSlide>

                    <SwiperSlide><Link to="/"><div className="item bg-white p-3 rounded-sm text-center "><img src="/slider/img7.png" alt=""  />
                    <h3 className="text-[12px] font-[600] mt-4" > jewellery</h3></div></Link></SwiperSlide>

                
                   
                </Swiper>

            </div>
        </div>
    )
}

export default CatSlider