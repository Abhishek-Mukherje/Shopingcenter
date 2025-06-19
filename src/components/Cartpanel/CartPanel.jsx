import { Button } from '@mui/material';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

function CartPanel() {
    return (
        <>
            <div className="scroll w-full  py-3 px-4 overflow-y-scroll overflow-x-hidden ">
                <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.2)] pb-4">
                    <div className='img w-[20%] overflow-hidden h-[100px] rounded-md'>
                        <img src="/fashion/img6.jpg" alt="" className='w-full' />
                    </div>
                    <div className='info w-[75%] pr-5 relative'>
                        <Link className='link'><h4 className='text-[14px] font-[500]'>Georgette Saree (Pink)</h4></Link>
                        <p className='flex items-center font-[500] gap-3 mt-2 mb-2'><span>Qty : <span>2</span></span>
                            <span className=' text-red-500 '>Price : $25</span>
                        </p>
                        <AiOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all' />
                    </div>

                </div>

                <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.2)] pb-4">
                    <div className='img w-[20%] overflow-hidden h-[100px] rounded-md'>
                        <Link className='group link'>
                        <img src="/fashion/img6.jpg" alt="" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>
                    <div className='info w-[75%] pr-5 relative'>
                        <Link className='link'><h4 className='text-[14px] font-[500]'>Georgette Saree (Pink)</h4></Link>
                        <p className='flex items-center font-[500] gap-3 mt-2 mb-2'><span>Qty : <span>2</span></span>
                            <span className=' text-red-500 '>Price : $25</span>
                        </p>
                        <AiOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all' />
                    </div>

                </div>

                <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.2)] pb-4">
                    <div className='img w-[20%] overflow-hidden h-[100px] rounded-md'>
                        <img src="/fashion/img6.jpg" alt="" className='w-full' />
                    </div>
                    <div className='info w-[75%] pr-5 relative'>
                        <Link className='link'><h4 className='text-[14px] font-[500]'>Georgette Saree (Pink)</h4></Link>
                        <p className='flex items-center font-[500] gap-3 mt-2 mb-2'><span>Qty : <span>2</span></span>
                            <span className=' text-red-500 '>Price : $25</span>
                        </p>
                        <AiOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all' />
                    </div>

                </div>

                <div className="cartitem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.2)] pb-4">
                    <div className='img w-[20%] overflow-hidden h-[100px] rounded-md'>
                        <img src="/fashion/img6.jpg" alt="" className='w-full' />
                    </div>
                    <div className='info w-[75%] pr-5 relative'>
                        <Link className='link'><h4 className='text-[14px] font-[500]'>Georgette Saree (Pink)</h4></Link>
                        <p className='flex items-center font-[500] gap-3 mt-2 mb-2'><span>Qty : <span>2</span></span>
                            <span className=' text-red-500 '>Price : $25</span>
                        </p>
                        <AiOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link translate-all' />
                    </div>

                </div>
            </div>


            
            <div className="bottomsec absolute bottom-[10px] left-[10px] w-full overflow-hidden">

                <div className='bottominfo w-full border-t border-[rgba(0,0,0,0.2)] py-3 px-5'>
                    <div className="flex mt-2 items-center justify-between w-full">
                        <span className="text-[14px] font-[600] ">4 Items</span>
                        <span className=' text-red-500 font-bold'>$ 45</span>
                    </div>

                    <div className="flex mt-2 items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Shipping</span>
                        <span className=' text-red-500 font-bold'>$ 5</span>
                    </div>
                </div>
                <div className='bottominfo w-full border-t border-[rgba(0,0,0,0.2)] py-3 px-5'>
                    <div className="flex mt-2 items-center justify-between w-full">
                        <span className="text-[14px] font-[600] ">Total (tax excl.)</span>
                        <span className=' text-red-500 font-bold'>$83.00</span>
                    </div>

                    <div className="flex mt-2 items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total (tax incl.)</span>
                        <span className=' text-red-500 font-bold'>$83.00</span>
                    </div>

                    <br />
                    <div className="flex mt-2 items-center justify-between w-full">
                        <span className="text-[14px] font-[600]">Total :</span>
                        <span className=' text-red-500 font-bold'>$0.00</span>
                    </div>



                    <div className="flex items-center justify-between mt-1">

                       <Link to="/cart" className="w-[40%] d-block"><Button className="btn !bg-red-600 !text-white w-full">VIEW CART</Button></Link>
                       <Link to="/checkout" className="w-[45%]  d-block"><Button className="btn-org btn-border  w-full">CHECKOUT</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel