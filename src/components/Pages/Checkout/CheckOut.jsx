import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoBagCheckOutline } from "react-icons/io5";

function CheckOut() {
    return (
        <>
            <section className='py-10'>
                <div className="container flex gap-5">
                    <div className="leftCol w-[70%]">
                        <div className="card bg-white shadow-md p-5 rounded-md w-full ">
                            <h1 className='font-[600]'>Billing Details</h1>

                            <form className='w-full mt-3'>
                                <div className="flex items-center gap-5 pb-5">
                                    <div className="col  w-[50%]">
                                        <TextField
                                            className='w-full'
                                            id="outlined-basic"
                                            label="Full Name"
                                            variant="outlined" size='small'>

                                        </TextField>
                                    </div>


                                    <div className="col  w-[50%]">
                                        <TextField
                                            className='w-full'
                                            type='email'
                                            id="outlined-basic"
                                            label="Email"
                                            variant="outlined" size='small'>

                                        </TextField>
                                    </div>

                                </div>
                                <h5 className='
                                    font-[500] mb-2'>Street address *</h5>
                                <div className="col  w-[100%] mb-5">
                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="House number and street name"
                                        variant="outlined" size='small'>

                                    </TextField>
                                </div>

                                <div className="col  w-[100%] mb-5">
                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="Apartment, Sute, Unit, etc (optional)"
                                        variant="outlined" size='small'>

                                    </TextField>
                                </div>


                                <div className="flex items-center gap-5 w-[100%] mb-5">
                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="Town / City *"
                                        variant="outlined" size='small'>

                                    </TextField>



                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="State / County *"
                                        variant="outlined" size='small'>

                                    </TextField>

                                </div>





                                <div className="flex items-center gap-5 w-[100%] mb-5">
                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="Postcode / ZIP *"
                                        variant="outlined" size='small'>

                                    </TextField>



                                    <TextField
                                        className='w-full'
                                        id="outlined-basic"
                                        label="Phone *"
                                        variant="outlined" size='small'>

                                    </TextField>

                                </div>


                            </form>
                        </div>



                    </div>
                    <div className="card bg-white shadow-md p-5 rounded-md  w-[30%]">
                        <h1 className='mb-5 font-[500]'>YOUR ORDER</h1>
                        <hr />
                        <div className='flex items-center justify-between p-5'>
                            <span className='text-[14px] font-[600]'>Product</span>
                            <span className='text-[14px] font-[600]'>Subtotal</span>
                        </div>
                        <hr />


                        < div className='scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-5'>

                            <div className='flex items-center justify-between p-2'>
                                <div className="part1 flex items-center gap-3">
                                    <div className=" mt-2 img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="./fashion/img8.jpg" alt="" className='w-full group-hover:scale-105 translate-all' />
                                    </div>
                                    <div className="info">
                                        <h4 className="link text-[13px] font-[600]">Men Alias-N Regular ...</h4>
                                        <span className="text-[13px]">Qty : 1</span>
                                    </div>
                                </div>
                                <span className="text-[13px] font-[600] text-red-600">₹ 1300</span>
                            </div>




                            <div className='flex items-center justify-between p-1'>
                                <div className="part1 flex items-center gap-3">
                                    <div className=" mt-2 img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="./fashion/img8.jpg" alt="" className='w-full group-hover:scale-105 translate-all' />
                                    </div>
                                    <div className="info">
                                        <h4 className="link text-[13px] font-[600]">Men Alias-N Regular ...</h4>
                                        <span className="text-[13px]">Qty : 1</span>
                                    </div>
                                </div>
                                <span className="text-[13px] font-[600] text-red-600">₹ 1300</span>
                            </div>






                            <div className='flex items-center justify-between p-1'>
                                <div className="part1 flex items-center gap-3">
                                    <div className=" mt-2 img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="./fashion/img8.jpg" alt="" className='w-full group-hover:scale-105 translate-all' />
                                    </div>
                                    <div className="info">
                                        <h4 className="link text-[13px] font-[600]">Men Alias-N Regular ...</h4>
                                        <span className="text-[13px]">Qty : 1</span>
                                    </div>
                                </div>
                                <span className="text-[13px] font-[600] text-red-600">₹ 1300</span>
                            </div>






                            <div className='flex items-center justify-between p-1'>
                                <div className="part1 flex items-center gap-3">
                                    <div className=" mt-2 img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img src="./fashion/img8.jpg" alt="" className='w-full group-hover:scale-105 translate-all' />
                                    </div>
                                    <div className="info">
                                        <h4 className="link text-[13px] font-[600]">Men Alias-N Regular ...</h4>
                                        <span className="text-[13px]">Qty : 1</span>
                                    </div>
                                </div>
                                <span className="text-[13px] font-[600] text-red-600">₹ 1300</span>
                            </div>

                        </div>
                        <div className='flex items-center justify-center mt-5 w-full '>
                            <Button className='flex items-center gap-2 w-full btn-lg btn-crt'><IoBagCheckOutline className='text-[20px]'/>Checkout</Button>
                        </div>

                    </div>
                </div>


            </section >

        </>
    )
}

export default CheckOut