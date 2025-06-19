import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItems from '../Productitems/ProductItems';


function ProductSlider(props) {
    return (

        <div className="Products py-4">
            <Swiper slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">


                <SwiperSlide>
                    <ProductItems img={'/fashion/img2.webp'} img2={'/fashion2/img2.webp'} discount={1800} newp={1500} titel={"Poshyaa "} des={'Poshyaa Premium Trendy Tops & Tunics For Women'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img3.webp'} img2={'/fashion2/img3.webp'} discount={1200} newp={850} titel={"Jainish "} des={'Men Slim Fit Solid Button Down Collar Formal Shirt'} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img4.jpg'} img2={'/fashion2/img4.jpg'} discount={1700} newp={1500} titel={"unity luxure"} des={'Casual Puff Sleeves Solid Women Red Top'} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img8.jpg'} img2={'/fashion2/img8.jpg'} discount={4399} newp={2551} titel={"RARE RABBIT"} des={'Men Alias-N Regular Fit Spread Collar Shirt'} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img6.jpg'} img2={'/fashion2/img6.webp'} discount={490} newp={450} titel={" Georgette Saree (Pink)"} des={'Womens Desinger Printed Trendy Georgette Saree with Blouse Material'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img7.jpg'} img2={'/fashion2/img7.webp'} discount={480} newp={440} titel={"Watson"} des={'Women Viscose Rayon Kurta Pant Dupatta Set'}/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductItems img={'/fashion/img10.webp'} img2={'/fashion2/img10.jpg'} discount={490} newp={450} titel={"KALRAV JAYPORE "} des={'Womens Viscose Rayon Round Neck & Dupatta Set'}/>
                </SwiperSlide>

            

            </Swiper>


        </div>

    )
}

export default ProductSlider