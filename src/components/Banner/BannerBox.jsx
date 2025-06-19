import React from 'react'
import { Link } from 'react-router-dom'

function BannerBox(props) {
    return (
        <div className='container bg-white '>

            <div className="box rounded-[10px] mt-[82px] group">
                <Link to="/"><img src={props.img} alt="" className='w-full group-hover:scale-105 transition-all' /></Link>
            </div>


        </div>
    )
}

export default BannerBox