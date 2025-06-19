import React,{useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';




function MyListItems(props) {
    

  return (
    <div className="cartitems w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]">
                                <div className='img w-[10%] rounded-md overflow-hidden'>
                                    <Link to="/product/7845" className='group'><img src="./fashion/img2.webp" alt=""
                                        className='w-full group-hover:scale-105 translate-all' />
                                    </Link>
                                </div>
                                <div className="info w-[85%] relative" >
                                    <IoCloseSharp className="text-[22px] cursor-pointer absolute top-[0px] right-[0px] link translate-all" />
                                    <span className='text-[13px]'>Deel band</span>
                                    <h3 className='text-[15px]'><Link className='link font-[500]'>Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set</Link></h3>

                                    <Rating name="size-small" defaultValue={4} size="small" readOnly />



                                    <div className="flex w-full items-center gap-5 mt-2 mb-2">
                                        <span className="old line-through font-bold text-[14px] text-black-500 ">₹ 70</span>
                                        <span className="new font-bold text-gray-500">₹ 58</span>
                                        <span className="new font-bold text-orange-500"> 55% OFF</span>

                                    </div>


                                    <Button className="btn-org btn-sm !w-[40px]">Add toh Cart Krle</Button>
                                </div>
                            </div>
  )
}

export default MyListItems