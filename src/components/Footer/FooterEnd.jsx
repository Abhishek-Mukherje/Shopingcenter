import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubblesOutline } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import CartPanel from '../Cartpanel/CartPanel';
import { MyContext } from '../../App'; 


function FooterEnd() {
    const context = useContext(MyContext)
    
    return (
        <>

            <div className=' bg-white w-full '>
                <div className='container bg-white w-full'>
                    <div className='flex justify-center  items-center  '>
                        <div className="part1  flex mt-2  gap-2 flex-col w-[30%] ">
                            <h2 className='text-[25px] font-[500]'>Contact us</h2>
                            <div>
                                <p className='mt-2 text-gray-600'>Abhishek - Mega Super Store <br />
                                    507-Union Trade Centre<br />
                                    France
                                </p>
                                <div className='flex gap-2 flex-col'>
                                    <p className=' text-gray-600 mt-2' ><Link to="/" className='link'>abhishekmukherjee7492@gmail.com</Link></p>
                                    <span className='text-red-500 text-[29px] flex  font-[500] gap-5'>(+91) 9635957042</span>
                                    <div className='flex gap-2 text-[40px]'><IoChatbubblesOutline /><p className='flex text-[20px] font-[600]'>Online Chat<br />
                                        Get Expert Help</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="part2 w-[30%]">
                            <h2 className='text-[25px] font-[500]'>Products</h2>
                            <div className='text-gray-400 mt-2 flex flex-col gap-2'>
                                <p>Prices drop</p>
                                <p>New products</p>
                                <p>Best sales</p>
                                <p>Contact us</p>
                                <p>Sitemap</p>
                                <p>Stores</p>
                            </div>
                        </div>

                        <div className="part3 w-[40%] ">
                            <h2 className='text-[25px] font-[500]'>Our company</h2>
                            <div className='text-gray-400 mt-2 flex flex-col gap-2'>
                                <p>Delivery</p>
                                <p>Legal Notice</p>
                                <p>Terms and conditions of use</p>
                                <p>About us</p>
                                <p>Secure payment</p>
                                <p>Login</p>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
            {/* Cart Drawer */}
            <Drawer open={context.openCartPanel} onClose={ context.toggleCartPanel(false)} anchor="right" className="cartpanel ">
                <div className="flex items-center justify-between px-4 py-3 gap-3 border-b border-[rgba(0,0,0,0.2)]">
                    <h4 className="font-[600] w-full">Shopping Cart(1)</h4>
                    <IoCloseSharp className="text-[20px] cursor-pointer" onClick={ context.toggleCartPanel(false)} />
                </div>
                <CartPanel />
            </Drawer>

        </>
    )
}

export default FooterEnd