import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from '@mui/material';


function Qtrbox() {

const [qtyVal, setQtyVal]=useState(1)

const plusQty=()=>{
  setQtyVal(qtyVal+1)
}
const minusQty=()=>{
  if (qtyVal !== 0) {
    setQtyVal(qtyVal - 1);

  }
}

  return (
    <div className='qtrbox flex items-center relative'>

      <input type="number" className='w-full h-[40px] pl-5 p-2 text[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md' value={qtyVal} />

      <div className='flex flex-col items-center justify-center h-[40px] absolute top-0 right-0 z-50'>
        <Button className='!min-w-[30px] !w-[30px]!h-[20px] !text-black !rounded-none' onClick={plusQty}><FaAngleUp /></Button>
        <Button className='!min-w-[30px] !w-[30px]!h-[20px] !text-black !rounded-none' onClick={minusQty}><FaAngleDown /></Button>
      </div>

    </div>
  )
}

export default Qtrbox