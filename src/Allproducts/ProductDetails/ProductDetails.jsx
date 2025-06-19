import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Button } from '@mui/material';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Qtrbox from './Qtrbox';
import { IoGitCompareOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import ProductSlider from '../ProductSlider/ProductSlider';
import ProductZoom from '../ProductZoom/ProductZoom';






function ProductDetails() {
  const [productActionindex, setProductActionindex] = useState(null);
  const [activeTab, setActiveTab] = useState(0)






  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link transition">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/Fashion" className="link transition">
              Fashion
            </Link>
            <Link underline="hover" color="inherit" href="/Fashion" className="link transition">
              Cropped Satin Bomber Jaacket
            </Link>
          </Breadcrumbs>
        </div>

        <section>

          <div className='bg-white py-5'>
            <div className='container flex gap-4'>
              <div className='ProductZoomCointaner w-[30%] h-[50vh] overflow-hidden'>
                <ProductZoom />
              </div>
              <div className='productcointain w-[60%] flex flex-col gap-3 mt-5'>
                <h1 className='text-[35px] font-[500]'>KALRAV JAYPORE</h1>
                <p className='text-[25px] font-[500]'>Womens Viscose Rayon Round Neck & Dupatta Set</p>
                <div className='flex items-center gap-2'>
                  <Rating name="size-small" defaultValue={4} size="m" readOnly />
                  <p className='text-gray-500'>4 Rating</p>
                </div>
                <div className=' flex items-center gap-3'>
                  <span className='text-gray-500 line-through'>Rs: 490</span>
                  <span className='text-red-500 font-[600]'>Rs: 450 </span>
                  <span>Available In Stock</span>   <span className='text-green-600 text-[14px] font-bold'>147 items</span>
                </div>
                <p className='text-[14px] font-[500] text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className='flex gap-1 mt-5 cursor-pointer'>
                  <span>Size:</span>
                  <span className={`flex gap-2 w-6 items-center rounded-sm justify-center text-white bg-purple-800 ${productActionindex === 0 ? 'bg-red-500 text-white' : ''} `} onClick={() => setProductActionindex(0)}>S</span>
                  <span className={`flex gap-2 w-6 items-center rounded-sm justify-center text-white bg-purple-800 ${productActionindex === 1 ? 'bg-red-500 text-white' : ''} `} onClick={() => setProductActionindex(1)}>M</span>
                  <span className={`flex gap-2  w-6 items-center rounded-sm justify-center text-white bg-purple-800 ${productActionindex === 2 ? 'bg-red-500 text-white' : ''} `} onClick={() => setProductActionindex(2)}>L</span>
                </div>


                <p className='text-[14px] mt-5' >Free Shipping (Est. Delivery Time 2-3 Days)</p>


                <div className="flex items-center mt-5 gap-4">

                  <div className="QtrBoxappire w-[70px]">
                    <Qtrbox />

                  </div>

                  <div>
                    <Button className='btn-org  flex gap-2'><IoCartOutline className='text-[20px]' />Add to Cart</Button>
                  </div>

                </div>




                <div className="flex  items-center gap-8 mt-5 ">
                  <span className="flex items-center gap-3 text-[14px] cursor-pointer link"><FaRegHeart className="text-[19px]" />Add to Wishlist</span>

                  <span className="flex items-center gap-3 text-[14px] cursor-pointer link"><IoGitCompareOutline className="text-[19px]" />Add to Compare</span>
                </div>






              </div>
            </div>
          </div>




          <div className="container pt-10 ">
            <div className="flex items-center  gap-8 mb-5">
              <span className={`text-[17px] cursor-pointer link font-[500] ${activeTab === 0 && 'text-red-500'}`} onClick={() => setActiveTab(0)}>Description</span>

              <span className={`text-[17px] cursor-pointer link font-[500] ${activeTab === 1 && 'text-red-500'}`} onClick={() => setActiveTab(1)}>Product Details</span>

              <span className={`text-[17px] cursor-pointer link font-[500] ${activeTab === 2 && 'text-red-500'}`} onClick={() => setActiveTab(2)}>Reviews (5)</span>
            </div>
          </div>
          {
            activeTab === 0 && (<div className="shadow-md container w-full p-5 rounded-md">
              <p className="text-[14px] font-[400]">The Cotton Blend Fabric in this attractive White Color ready to wear Kurta Set will make sure that the fitting of this beautiful readymade Kurta Set looks elegant on you. Crafted from Cotton Blend Fabric , it is light in weight and will be soft against your skin. Its unique design and beautiful colour will fetch a lot of second glances as you club it with contrast colored pumps and flashy accessory. Our Products are Made and stitched using high grade fabrics and yarns under the strict surveillance of our well-versed Executives. It is capable of making you look gorgeous. Wear it and put your step in the world of fashion. It looks stunning every time you match it with accessories.</p>
              <br/><br/><br/><br/>
            </div>


            )}


          {
            activeTab === 1 && (



              <div className="relative overflow-x-auto shadow-md container w-full p-5 rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                  <tbody>
                    <tr className="bg-gray border-b dark:bg-black-400 dark:border-gray-800 border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-black">
                        Fabric
                      </th>
                      <td className="px-6 py-4 text-black">

                        Cotton Blend
                      </td>

                    </tr>
                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Type
                      </th>
                      <td className="px-6 py-4 text-black">
                        Kurta and Palazzo Set
                      </td>

                    </tr>
                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Sales Package
                      </th>
                      <td className="px-6 py-4 text-black">
                        1 Kurta,1 Palazzo,1 Dupatta Set
                      </td>
                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Style Code
                      </th>
                      <td className="px-6 py-4 text-black">
                        RRRRR8055
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Top fabric
                      </th>
                      <td className="px-6 py-4 text-black">

                        Cotton Blend
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Bottom fabric
                      </th>
                      <td className="px-6 py-4 text-black">

                        Cotton
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Top type
                      </th>
                      <td className="px-6 py-4 text-black">
                        Kurta
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Bottom type
                      </th>
                      <td className="px-6 py-4 text-black">

                        Palazzo
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Pattern
                      </th>
                      <td className="px-6 py-4 text-black">
                        Embroidered
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Color
                      </th>
                      <td className="px-6 py-4 text-black">

                        White, Black
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Occasion
                      </th>
                      <td className="px-6 py-4 text-black">

                        Festive & Party
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Neck
                      </th>
                      <td className="px-6 py-4 text-black">

                        Round Neck
                      </td>

                    </tr>

                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        Bottom fabric
                      </th>
                      <td className="px-6 py-4 text-black">


                        Cotton
                      </td>

                    </tr>
                    <tr className="bg-gray border-b dark:bg-black-200 dark:border-gray-800 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-black-800 whitespace-nowrap dark:text-black">
                        Fabric care
                      </th>
                      <td className="px-6 py-4 text-black">

                        Dry Clean
                      </td>

                    </tr>

                  </tbody>
                </table>
              </div>



            )}


          {
            activeTab === 2 && (
              <div className="container flex flex-col gap-5 py-5 shadow-md w-[80%] p-5 rounded-md">
                <h1 className="font-[600] text-[18px]"> Customer questions & answers</h1>

                <div className="reviewScroll w-full max-h-[300px] overflow-x-scroll overflow-y-scroll mt-5 overflow-hidden ">
                  <div className='review pb-5 border-b mt-3 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>

                    <div className="info w-[60%] flex items-center gap-3 ">

                      <div className="img w-[80px] overflow-hidden rounded-full h-[80px]"><img src="/user.png" alt="" className='w-full ' /></div>
                      <div className="w-[80%]">

                        <h4 className="text-[16px]">Abhishek Mukherjee</h4>
                        <h5 className="text-[13px] mb-0">2025-02-15</h5>
                        <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>



                  <div className='review pb-5 border-b mt-3 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>

                    <div className="info w-[60%] flex items-center gap-3 ">

                      <div className="img w-[70px] overflow-hidden rounded-full h-[80px]"><img src="/user.png" alt="" className='w-full ' /></div>
                      <div className="w-[80%]">

                        <h4 className="text-[16px]">Abhishek Mukherjee</h4>
                        <h5 className="text-[13px] mb-0">2025-02-15</h5>
                        <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className='review w-full pb-5 mt-3 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between'>

                    <div className="info mb-5 w-[60%] flex items-center gap-3 ">

                      <div className="img w-[80px] overflow-hidden rounded-full h-[80px]"><img src="/user.png" alt="" className='w-full ' /></div>
                      <div className="w-[80%]">

                        <h4 className="text-[16px]">Abhishek Mukherjee</h4>
                        <h5 className="text-[13px] mb-0">2025-02-15</h5>
                        <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className='review pb-5 border-b mt-3 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>

                    <div className="info w-[60%] flex items-center gap-3 ">

                      <div className="img w-[80px] overflow-hidden rounded-full h-[80px]"><img src="/user.png" alt="" className='w-full ' /></div>
                      <div className="w-[80%]">

                        <h4 className="text-[16px]">Abhishek Mukherjee</h4>
                        <h5 className="text-[13px] mb-0">2025-02-15</h5>
                        <p className="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
                      </div>

                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>


                </div>

                <div className="reviewform flex flex-col mt-8">
                  <h5 className="font-[600] text-[18px] mb-5">Add a Reviews </h5>

                  <TextField
                    id="outlined-multiline-static"
                    label="Write a review"
                    multiline
                    rows={5}

                  />
                  <br /> <br />
                  <Rating name="size-small" defaultValue={4} />
                </div>

                <div className="flex mt-5 items-center">
                  <Button className="btn-org"> Submit Review</Button>

                </div>
              </div>


            )

          }
        </section>

        <br/><br/><br/><br/>
        <div className="container mt-11">
          <h2 className='text-[22px] font-[600] '>Related Products</h2>

          <ProductSlider items={6} />

        </div>
      </div>

    </>
  )
}

export default ProductDetails