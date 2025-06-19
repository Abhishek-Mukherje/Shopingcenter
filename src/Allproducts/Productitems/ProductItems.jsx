import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
function ProductItems(props) {
    return (
        <div className="ProductItems shadow-lg rounded-md overflow-hidden w-full border-2  border-[rgba(0,0,0,0.1)] ">

            <div className="imgwraper w-[100%] h-[220px] overflow-hidden rounded-md group relative">

                <img src={props.img} alt="" className='rounded-md w-full group-hover:scale-105 transition-all' />
                <img src={props.img2} alt="" className='rounded-md w-full absolute top-0 left-0  opacity-0 group-hover:opacity-100 duration-700 z-0 transition-all '/>


            </div>

            <div className="h-[190px] ">
            <div className="info w-full p-1 m-3">
                <h6 className='text-[13px]'><Link to="/" className='link'>{props.titel}</Link> </h6>
                <h3 className='text-[14px] titel mt-2 font-[500] transition-all mb-1'><Link to="/" className='link'>{props.des}</Link></h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
            </div>
            <div className="flex h-[80px] w-full items-center pl-[12px] gap-5 ">
                <div className="old line-through font-bold text-[15px] text-gray-500 ">₹ {props.discount}</div>
                <div className="new font-bold text-red-500">₹ {props.newp}</div>

            </div>
            </div>
        </div>
    )
}

export default ProductItems