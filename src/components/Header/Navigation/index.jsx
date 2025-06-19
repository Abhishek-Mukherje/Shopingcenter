import React, { useState } from 'react'

import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CatagoryPanel from './CatagoryPanel';

function Navigation() {
const [isOpenCatPanel,setIsOpenCatPanel]= useState(false);
  const openCategoryPanel=()=>{
    setIsOpenCatPanel(true)
  }
  return (
    <>
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col1 w-[20%]">

          <Button className="!text-black  gap-2 w-full " onClick={openCategoryPanel}><RiMenu2Fill className="text-[18px] " /> 
          Shop By Categories
            <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" /> </Button>
        </div>

        <div className="col2 w-[60%] ">
          <ul className="flex items-center gap-3 nav">
          <li className="list-none"><Link to="/" className="link transition font-[500] text-[14px]"> Home</Link> </li>
          <li className="list-none relative"><Link to="/Productlisting" className="link transition font-[500] text-[14px] "> fashion</Link>
          <div className="submenu absolute top-[120%] left-[0%] right-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">

            <ul className="flex flex-col w-full">
              <li className="list-none w-full "><Button className="!text-[12px] link !text-[rgba(0,0,0,1)] !font-[500] w-full !text-left !justify-start !rounded-none">Male</Button></li>
              <li className="list-none w-full "><Button className="!text-[12px] link !text-[rgba(0,0,0,1)] !font-[500] w-full !text-left !justify-start !rounded-none">Female</Button></li>
              <li className="list-none w-full "><Button className="!text-[12px] link !text-[rgba(0,0,0,1)] !font-[500] w-full !text-left !justify-start !rounded-none ">Kids</Button></li>
              <li className="list-none w-full "><Button className="!text-[12px] link !text-[rgba(0,0,0,1)] !font-[500] w-full !text-left !justify-start !rounded-none ">Girls</Button></li>
              <li className="list-none w-full "><Button className="!text-[12px] link !text-[rgba(0,0,0,1)] !font-[500] w-full !text-left !justify-start !rounded-none ">Boys</Button></li>
            </ul>

          </div>
          </li>
          <li className="list-none"><Link to="/Electronics" className="link transition font-[500] text-[14px] ">Electronics </Link></li>
          <li className="list-none"><Link to="/Bags" className="link transition font-[500] text-[14px] ">Bags </Link></li>
          <li className="list-none"><Link to="/Footwear" className="link transition font-[500] text-[14px] ">Footwear</Link></li>
          <li className="list-none"><Link to="/Groceries" className="link transition font-[500] text-[14px] ">Groceries</Link></li>
          <li className="list-none"><Link to="/Beauty" className="link transition font-[500] text-[14px] ">Beauty</Link></li>
          <li className="list-none"><Link to="/jewellery" className="link transition font-[500] text-[14px] ">Jewellery</Link></li>


              
              
              
              
            
          </ul>
        </div>


        <div className="col3 w-[20%] mb-0 mt-0">
          <p className="text-[14px] font-[500] flex items-center gap-3"><GoRocket className="text-[18px]"/>Free International Delivery</p>
        </div>
      </div>
    </nav>
      <CatagoryPanel isOpenCatPanel= {isOpenCatPanel} setIsOpenCatPanel= {setIsOpenCatPanel}/>
      </>
  )
}

export default Navigation