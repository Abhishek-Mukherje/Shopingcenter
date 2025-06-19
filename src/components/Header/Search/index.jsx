import React from 'react'
import './style.css';
import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";


function Search() {
  return (
    <div className='flex serchB ox w-[100%] h-[50%] bg-[#e5e5e5] rounded-[5px] relative'>
          <input type="text" placeholder='search for Products...' className='w-full h-[40px] focus:outline-none bg-inherit p-2 text-[15px]' />
          <Button className='absolute !min-w-[37px]z-50 !w-[37px] !rounded-full'  ><IoSearchOutline className='text-black text-[20px]'/></Button>
    </div>
  
  )
}

export default Search;