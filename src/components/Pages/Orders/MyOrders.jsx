import React, { useState } from 'react'
import AccountSideBar from '../../Accountsidebar/AccountSideBar'
import { Button } from '@mui/material'
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Badge/Badge';

import { FaAngleRight } from 'react-icons/fa';

function MyOrders() {
    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null)
    const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null)
        } else {
            setIsOpenOrderProduct(index)
        }


    }
    return (
        <>
            <section className='py-10 w-full '>
                <div className='container flex gap-5'>
                    <div className='col1 w-[20%]'>
                        <AccountSideBar />
                    </div>

                    <div className='col2 w-[85%]'>
                        <div className='shadow-md rounded-md bg-white mb-5'>
                            <div className="py-2 px-3 border-b border[rgba(0,0,0,0.3)]">
                                <h2 className='text-[18px] font-[600]'>My Orders </h2>
                                <p>There are<span className='text-red-500'> 2 </span>products in your My Orders
                                </p>


                                <div className="relative overflow-x-auto mt-5">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                        <thead className="text-xs  text-gray-700 uppercase bg-gray-300 dark:bg-black-700 dark:border-gray-500">
                                            <tr>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    &nbsp;
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Order Id
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Paymant Id
                                                </th>

                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Name
                                                </th>

                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Address
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Pincode
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Total Amount
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Email
                                                </th>

                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    User Id
                                                </th>

                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Order Status
                                                </th>
                                                <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='bg-white border-b dark:bg-gray-100  dark:border-gray-700'>
                                                <td className='px-6 py-4 font-[500]'>  <Button className='!w-[35px] !h-[40px] !min-w-[40px] rounded-md'
                                                    onClick={() => isShowOrderProduct(0)}>
                                                        {
                                                          isOpenOrderProduct ===(0) ? <FaAngleDown className='text-[16px]' />:<FaAngleRight className='text-[16px]'/>
                                                        }
                                                    </Button>
                                                </td>
                                                <td className='px-6 py-4 font-[600] text-[#ff5252]'>1234</td>
                                                <td className='px-6 py-4 font-[600] text-[#ff5252]'>1234 </td>
                                                <td className='px-6 py-4 font-[600]'>Abhishek Mukherjee</td>
                                                <td className='px-6 py-4 font-[600]'>Adra</td>
                                                <td className='px-6 py-4 font-[600]'>723121</td>
                                                <td className='px-6 py-4 font-[600]'>Bohot paisa hai</td>
                                                <td className='px-6 py-4 font-[600]'>Abhishekmukherjee7492@gmail.com</td>
                                                <td className='px-6 py-4 font-[600] text-[#ff5252]'>Abhishek_1234</td>
                                                <td className='px-6 py-4 font-[600]'><Badge status="confirm" /></td>
                                                <td className='px-6 py-4 font-[600]'>07.02.2025</td>

                                            </tr>
                                            {
                                                isOpenOrderProduct === 0 && <tr>
                                                    <td className='pl-20' colSpan="6">
                                                        <div className="relative overflow-x-auto">
                                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                <thead className="text-xs  text-gray-700 uppercase bg-gray-300 dark:bg-black-700 dark:border-gray-500">
                                                                    <tr>

                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            Product Id
                                                                        </th>
                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            Product Items
                                                                        </th>

                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            image
                                                                        </th>

                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            Quantity
                                                                        </th>
                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            Price
                                                                        </th>
                                                                        <th scope='col' className='px-6 py-3' whitespace-nowrap>
                                                                            SubTotal
                                                                        </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className='bg-white border-b dark:bg-gray-100  dark:border-gray-700'>

                                                                        <td className='px-6 py-4 font-[600] text-[#ff5252]'>1234</td>
                                                                        <td className='px-6 py-4 font-[600] text-[#ff5252]'>t-shart </td>
                                                                        <td className='px-6 py-4 font-[600]'><img src="/dp/img2.jpg" alt="" className='w-[40px] h-[40px] rounded-md object-cover' /></td>
                                                                        <td className='px-6 py-4 font-[600]'>2</td>
                                                                        <td className='px-6 py-4 font-[600]'>1300</td>
                                                                        <td className='px-6 py-4 font-[600]'>1544</td>


                                                                    </tr>

                                                                    <tr>
                                                                        <td className='bg-[#f1f1f1]' colSpan="12">
                                                                            dfxgh
                                                                        </td>
                                                                    </tr>


                                                                </tbody>

                                                            </table>

                                                        </div>
                                                    </td>
                                                </tr>
                                            }



                                        </tbody>

                                    </table>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default MyOrders