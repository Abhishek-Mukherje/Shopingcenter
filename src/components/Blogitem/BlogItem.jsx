import React from 'react'
import { CiTimer } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";

function BlogItem(props) {
    return (
        <>
        <div className='blogitem group mt-12'>
            <div className="imgraper w-full overflow-hidden  rounded-md relative">
              
                <img src={props.img} alt="" className='w-full pb-2 trangsition-all group-hover:scale-105 ' />
                <span className='flex items-center justify-center text-white font-bold absolute right-[15px] bottom-[15px] z-50 bg-red-600 rounded-md p-1 gap-1'> < CiTimer />{props.date}</span>

            </div>

            <div className="blogtitel">
                <h5 className='text-[17px] font-[600] mb-2'>{props.titel}</h5>
                <p className='text-gray-400'> {props.des}</p>
                <Link> <h2 className='text-red-600 underline font-bold-600 mt-2 flex items-center gap-1 '>READ MORE<IoIosArrowDropright /></h2></Link>
            </div>
        </div>
        </>
    )
}

export default BlogItem