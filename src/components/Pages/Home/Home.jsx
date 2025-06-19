import React, { useState } from 'react'
import CatSlider from '../../HomeCatslider/CatSlider'
import { FaShippingFast } from "react-icons/fa";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../Blogitem/BlogItem';
// import ProductItems from '../../Productitems/ProductItems';
import { Link } from 'react-router-dom';
import ProductSlider from '../../../Allproducts/ProductSlider/ProductSlider';
import HomeSlider from '../../Homeslider/HomeSlider'
import AddCardSlider from '../../AddcardSlider/AddCardSlider'




function Home() {

  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  }

  return (
    <>
      <HomeSlider/>
      <CatSlider />


      <section className='bg-white py-8 mt-5'>
        <div className='container '>
          <div className='flex items-center justify-between'>

            <div className="leftsec ">
              <h2 className='text-[22px] font-[600] '>Popular Products</h2>
              <p className='text-[15px] font-[400]'>Do not miss the current offers until the end of March.</p>
            </div>

            <div className="right w-[45%]">

              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
               <Link to=""><Tab label="fashion" /></Link> 
                <Tab label="Electronics" />
                <Tab label=" Bags" />
                <Tab label="Footwear " />
                <Tab label="Groceries " />
                <Tab label="Beauty " />
                <Tab label="jewellery " />
              </Tabs>

            </div>

          </div>


          <ProductSlider items={5} />



        </div>
      </section>

      <section className='py-16 bg-white mb-[-50px]'>
        <div className='container border-[2px] border-solid border-[red] p-4 flex flex-col justify-center items-center rounded-md '>
          <div className="freeshiping w-full flex justify-between items-center  ">

            <div className=" col1 flex gap-4 items-center font-[600] "><FaShippingFast className=" text-[50px] flex" /><span className=" uppercase text-[20px] font -[600] 
              flex">Free Shipping</span>
            </div>

            <div className="col2 flex gap-4 items-center"><p className="font-[600] ">Free Delivery Now On Your First Order and over $200</p>
            </div>

            <div className="col2 flex gap-4 items-center text-[20px]"><p className=" font-[600] ">- Only $200*</p>
            </div>

          </div>


        </div>
      </section>

      <AddCardSlider items={4} />


      <section className='py-5 pt-0 bg-white'>
        <div className="container">
          <h2 className='text-[22px] font-[600] '>Latest Products</h2>

          <ProductSlider items={6} />
          <AddCardSlider items={2} />
        </div>
      </section>


      <section className='py-5  bg-white'>

        <h2 className='text-[22px] font-[600] !mt-[30px] !mb-15 container'>From The Blog</h2>

        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="BlogSlider "
          >



            <SwiperSlide >
              <BlogItem img={'/blogimg/b-blog-5.jpg'}
                titel={'Nullam ullamcorper ornare molestie'}
                des={"Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam..."}
                date={"5 Jan 2025"} />

            </SwiperSlide>

            <SwiperSlide >
              <BlogItem img={'/blogimg/b-blog-6.jpg'}
                titel={'Nullam ullamcorper ornare molestie'}
                des={"Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam..."}
                date={"5 Jan 2025"} />

            </SwiperSlide>

            <SwiperSlide >
              <BlogItem img={'/blogimg/b-blog-7.jpg'}
                titel={'Nullam ullamcorper ornare molestie'}
                des={"Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam..."}
                date={"5 Jan 2025"} />

            </SwiperSlide>
          </Swiper>
        </div>
        {/* <ProductItems /> */}
      </section>


    </>
  )
}

export default Home