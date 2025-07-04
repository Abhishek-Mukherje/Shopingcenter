import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function AccountSideBar() {
    return (
        <>
            <div className='card bg-white shadow-md rounded-md sticky top-[10px]'>
                <div className='w-full p-3 flex items-center justify-center flex-col'>
                    <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group'>

                        <img src="/dp/img5.jpg" alt="" className='w-full h-full object-cover' />


                        <div className="overlay w-[100%] h-[100%] absolute top-0 z-50 bg-[rgba(0,0,0,0.7)]
                                 flex items-center justify-center cursor-pointer opacity-0 translate-all group-hover:opacity-100 translate-all">
                            <FaCloudUploadAlt className='text-white text-[25px]' />
                            <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0' />
                        </div>
                    </div>
                    <h3 className='font-[600]'>Abhishek Mukherjee</h3>
                    <h6 className='text-[12px] font-[400]'>abhishekmukherjee7492@gmail.com</h6>

                </div>

                <ul className='list-none pb-5 bg-[#f1f1f1] myAccountTab'>

                    <li className='w-full'>
                        <NavLink to="/my-account" exact={true} activeClassName='isActive'>
                            <Button className="w-full !text-[rgba(0,0,0,0.8)] !py-2 !text-left !capitalize !justify-start !px-5 !rounded-none flex items-center gap-2">
                                <FaRegUser className='text-[15px]' />My Profile
                            </Button></NavLink>

                    </li>

                    <li className='w-full'>
                        <NavLink to="/my-list" exact={true} activeClassName='isActive'>
                            <Button className="w-full !text-[rgba(0,0,0,0.8)] !py-2 !text-left !capitalize !justify-start !px-5 !rounded-none flex items-center gap-2">
                                <FaRegHeart className='text-[18px]' />My List
                            </Button>
                        </NavLink>
                    </li>

                    <li className='w-full'>
                        <NavLink to="/my-orders" exact={true} activeClassName='isActive'>
                            <Button className="w-full !text-[rgba(0,0,0,0.8)] !py-2 !text-left !px-5 !capitalize !justify-start !rounded-none flex items-center gap-2">
                                <IoBagCheckOutline className='text-[17px]' />My Orders
                            </Button>
                        </NavLink>
                    </li>

                    <li className='w-full'>
                        <NavLink to="/logout" exact={true} activeClassName='isActive'>
                            <Button className="w-full !text-[rgba(0,0,0,0.8)] !py-2 !text-left !px-5 !capitalize !justify-start !rounded-none flex items-center gap-2">
                                <IoLogOutOutline className='text-[20px]' />Logout
                            </Button>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default AccountSideBar