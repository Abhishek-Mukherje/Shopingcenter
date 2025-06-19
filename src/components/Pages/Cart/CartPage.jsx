import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import CartSize from './CartSize';
import { Link } from 'react-router-dom';


function CartPage() {


    return (
        <>
            <section className='section py-5'>
                <div className="container flex w-[80%] max-w-[80%] gap-9">
                    <div className="left w-[70%]">

                        <div className='shadow-md rounded-md bg-white mb-5'>
                            <div className="py-2 px-3 border-b border[rgba(0,0,0,0.3)]">
                                <h2 className='text-[18px] font-[600]'>Your Cart</h2>
                                <p>There are<span className='text-red-500'> 2 </span>products in your cart
                                </p>
                            </div>

                            <CartSize size="S" qty={1} />
                        </div>

                    </div>


                    <div className="right w-[30%]">
                        <div className='shadow-md rounded-md bg-white p-5'>
                            <h3 className="text-[15px] font-[600] p-3">CART TOTALS</h3>
                            <hr />

                            <p className='flex items-center justify-between py-4'>
                                <span className='font-[500]'>Subtotal</span>
                                <span className='font-[500] text-red-600'>₹23,990.00</span>
                            </p>

                            <p className='flex items-center justify-between'>
                                <span className='font-[500]'>Shipping</span>
                                <span className='font-[500] text-gray-400'>Free</span>
                            </p>

                            <p className='flex items-center justify-between py-4'>
                                <span className='font-[500]'>Estimate for</span>
                                <span className='font-[600]'>Apna desh</span>
                            </p>

                            <p className='flex items-center justify-between pb-5'>
                                <span className='font-[500]'>Total</span>
                                <span className='font-[500] text-red-600'>₹23,990.00</span>
                            </p>
                            <div className="btn-crtt ">
                              <Link to="/checkout"><Button className='btn-crt  flex items-center justify-center gap-2'>
                              <IoBagCheckOutline className='text-[20px]' />Checkout</Button></Link>  
                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default CartPage