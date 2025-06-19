
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaGiftsSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";


function Footer() {
    return (

        <footer className="footer  bg-white w-full py-20">
            <div className="container flex justify-around ">
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center  flex-col group w[15%]">
                        <div className="text-[50px] transition-all duration-300 group-hover:text-red-300 group-hover:-translate-y-3 "><TbTruckDelivery /></div>
                        <h2 className="text-[18px] font-[500] mt-3">Free Shipping</h2>
                        <p className=" text-[15px] text-gray-400">For all Orders Over $100</p>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center  flex-col group w[15%]">
                        <div className="text-[50px] transition-all duration-300 group-hover:text-red-300 group-hover:-translate-y-3 "><GiReturnArrow /></div>
                        <h2 className="text-[18px] font-[500] mt-3">30 Days Returns</h2>
                        <p className=" text-[15px] text-gray-400">For an Exchange Product</p>

                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center  flex-col group w[15%]">
                        <div className="text-[50px] transition-all duration-300 group-hover:text-red-300 group-hover:-translate-y-3 ">< RiSecurePaymentLine /></div>
                        <h2 className="text-[18px] font-[500] mt-3">Secured Payment</h2>
                        <p className=" text-[15px] text-gray-400">Payment Cards Accepted</p>

                    </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center  flex-col group w[15%]">
                        <div className="text-[50px] transition-all duration-300 group-hover:text-red-300 group-hover:-translate-y-3 "><LiaGiftsSolid /></div>
                        <h2 className="text-[18px] font-[500] mt-3">Special Gifts</h2>
                        <p className=" text-[15px] text-gray-400">Our First Product Order</p>

                    </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center  flex-col group w[15%]">
                        <div className="text-[50px] transition-all duration-300 group-hover:text-red-300 group-hover:-translate-y-3 "><BiSupport /></div>
                        <h2 className="text-[18px] font-[500] mt-3">Support 24/7</h2>
                        <p className=" text-[15px] text-gray-400">Contact us Anytime</p>

                    </div>
                </div>
                <hr />
            </div>
        </footer>


    )
}

export default Footer

