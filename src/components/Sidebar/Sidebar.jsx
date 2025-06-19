import React, { useState } from 'react'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Sidebar.css'
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';


function Sidebar() {

    const [isOpencatagory, setIsOpencatagory] = useState(true);
    const [isOpenAvail, setIsOpenAvail] = useState(true);
    const [isOpenSize, setIsOpenSize] = useState(true);
    const [isOpenPrice, setIsOpenPrice] = useState(true);
    const [isOpenRating, setIsOpenRating] = useState(true);




    return (
        <aside className='sidebar py-5'>
            <div className='box '>
                <h3 className='mb-3 text-[16px] font-[600]'>Shop by Catagory
                    <Button onClick={() => setIsOpencatagory(!isOpencatagory)}>
                        {
                            isOpencatagory ? <IoIosArrowDown /> : <IoIosArrowUp />

                        }

                    </Button>
                </h3>
                <Collapse isOpened={isOpencatagory}>


                    <div className='scroll px-3 relative -left-[10px]'>

                        <FormControlLabel control={<Checkbox size='small' />} label="Fashion" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Bags" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Footwear" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Electronics" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Groceries" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Beauty" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Jewellery" className='w-full' />

                    </div>
                </Collapse>
            </div>


            <div className='box mt-5'>
                <h3 className='mb-3 text-[16px] font-[600]'>Availability
                    <Button onClick={() => setIsOpenAvail(!isOpenAvail)}>
                        {
                            isOpenAvail ? <IoIosArrowDown /> : <IoIosArrowUp />

                        }

                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvail}>


                    <div className='scroll px-3 relative -left-[10px]'>

                        <FormControlLabel control={<Checkbox size='small' />} label="Available (17)" className='w-full  ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="In stock (17)" className='w-full ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Not available (1)" className='w-full ' />


                    </div>
                </Collapse>
            </div>


            <div className='box mt-5'>
                <h3 className='mb-3 text-[16px] font-[600]'>Size
                    <Button onClick={() => setIsOpenSize(!isOpenSize)}>
                        {
                            isOpenSize ? <IoIosArrowDown /> : <IoIosArrowUp />

                        }

                    </Button>
                </h3>
                <Collapse isOpened={isOpenSize}>


                    <div className='scroll px-3 relative -left-[10px]'>

                        <FormControlLabel control={<Checkbox size='small' />} label="Small (6)" className='w-full  ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Medium (5)" className='w-full ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Large (1)" className='w-full ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="XL (1)" className='w-full ' />
                        <FormControlLabel control={<Checkbox size='small' />} label="XXL (1)" className='w-full ' />



                    </div>
                </Collapse>
            </div>

            <div className='box mt-4'>
                <h3 className='mb-3 text-[16px] font-[600] w-full pr-5 items-center'>Filter By Price
                    <Button onClick={() => setIsOpenPrice(!isOpenPrice)}>
                        {
                            isOpenPrice ? <IoIosArrowDown /> : <IoIosArrowUp />

                        }

                    </Button>
                </h3>
                <RangeSlider className='sliderange' />

                <div className='flex pt-4 pb-2 priceRange'>
                    <span className='text-[12px]  flex'>
                        From:  <p className='text-dark font-[600]'>Rs:{[500]}</p>
                    </span>
                    <span className='ml-auto text-[12px] flex'>
                        From:  <p className='text-dark font-[600]'>Rs: {[60000]}</p>
                    </span>
                </div>

            </div>


            <div className='box mt-4'>
                <h3 className='mb-3 text-[16px] font-[600] w-full pr-5 items-center'>Filter By Rating
                    <Button onClick={() => setIsOpenRating(!isOpenRating)}>
                        {
                            isOpenRating ? <IoIosArrowDown /> : <IoIosArrowUp />

                        }

                    </Button>
                </h3>
                <div className='flex flex-col'>Rating
                    <Rating name="size-small" defaultValue={5} size="small" />
                    <Rating name="size-small" defaultValue={4} size="small" />
                    <Rating name="size-small" defaultValue={3} size="small" />
                    <Rating name="size-small" defaultValue={2} size="small" />
                    <Rating name="size-small" defaultValue={1} size="small" />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar