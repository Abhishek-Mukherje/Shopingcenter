import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { IoCartOutline } from "react-icons/io5";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function ProductitemsListView(props) {
    return (
        <div className="ProductItems flex h-[260px] shadow-lg rounded-md overflow-hidden border-2  border-[rgba(0,0,0,0.1)] ">

            <div className="imgwraper w-[25%] overflow-hidden rounded-md group relative">

                <img src={props.img} alt="" className='rounded-md w-full group-hover:scale-105 transition-all' />
                <img src={props.img2} alt="" className='rounded-md w-full absolute top-0 left-0  opacity-0 group-hover:opacity-100 duration-700 z-0 transition-all ' />


            </div>
            <div className="info flex flex-col p-1 gap-2 m-3">
                <h6 className='text-[22px]'><Link to="/" className='link'>{props.titel}</Link> </h6>
                <h3 className='text-[22px] titel mt-2 font-[500] transition-all mb-1'><Link to="/" className='link'>{props.des}</Link></h3>
                <Rating name="size-small" defaultValue={4} size="m" readOnly />
                <div className="flex items-center pl-[12px] gap-5 ">
                    <div className="old line-through font-bold text-[15px] text-gray-500 ">₹ {props.discount}</div>
                    <div className="new font-bold text-red-500">₹ {props.newp}</div>

                </div>
                <div>
                <Button className='btn-org  flex gap-2'><IoCartOutline className='text-[20px]'/>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductitemsListView