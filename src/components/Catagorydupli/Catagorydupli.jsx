import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegMinusSquare } from "react-icons/fa";


function Catagorydupli() {

    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [subinnermenuIndex, setSubinnermenuIndex] = useState(null);

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null)
        } else {
            setSubmenuIndex(index)
        }

    }

    const openinnermenu = (index) => {
        if (subinnermenuIndex === index) {
            setSubinnermenuIndex(null)
        } else {
            setSubinnermenuIndex(index)
        }

    }


    return (
        <div className="scroll ">
            <ul className="w-full ">
                <li className="list-none  flex  relative flex-col">
                    <Link to="/">
                        <Button className="w-full flex !text-left !justify-start !px-3 !text-[14px] font-[500] !text-black">
                            fashion </Button></Link>
                    {
                        submenuIndex === 0 ?
                            <FaRegMinusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
                            :
                            <FaRegPlusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(0)} />
                    }

                    {
                        submenuIndex === 0 &&
                        (
                            <ul className="submenu w-full pl-3 ">
                                <li className="list-none relative flex flex-col">
                                    <Button className="w-full flex !text-left !justify-between px-3 !text-[14px] font-[500]  !text-black ">
                                        Apparel </Button>
                                    {
                                        subinnermenuIndex === 0 ?
                                            <FaRegMinusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openinnermenu(0)} />
                                            :
                                            <FaRegPlusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openinnermenu(0)} />
                                    }


                                    {
                                        subinnermenuIndex === 0 &&
                                        (
                                            <ul className="inner_submenu  w-full pl-4 flex flex-col gap-2">
                                                <li className="list-none relative flex flex-col">
                                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                                        Smart Tablet
                                                    </Link>
                                                </li>
                                                <li className="list-none relative flex flex-col">
                                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                                        Crepe T-Shirt
                                                    </Link>
                                                </li>


                                                <li className="list-none relative flex flex-col">
                                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                                        Leather watch
                                                    </Link>
                                                </li>

                                                <li className="list-none relative flex flex-col">
                                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                                        Rolling Diamond
                                                    </Link>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        )
                    }
                </li>


                <li className="list-none  flex items-center relative flex-col">
                    <Button className="w-full flex !text-left !justify-start !px-3 !text-[14px] font-[500] !text-black">
                        Outerwear </Button>
                    {
                        submenuIndex === 1 ?
                            <FaRegMinusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
                            :
                            <FaRegPlusSquare className="absolute text-[13px] top-[10px] right-[15px] cursor-pointer" onClick={() => openSubmenu(1)} />
                    }

                    {
                        submenuIndex === 1 &&
                        (
                            <ul className="inner_submenu  w-full pl-4 flex flex-col gap-2">
                                <li className="list-none relative flex flex-col">
                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                        Smart Tablet
                                    </Link>
                                </li>
                                <li className="list-none relative flex flex-col">
                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                        Crepe T-Shirt
                                    </Link>
                                </li>


                                <li className="list-none relative flex flex-col">
                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                        Leather watch
                                    </Link>
                                </li>

                                <li className="list-none relative flex flex-col">
                                    <Link to="/" className="link w-full text-[14px] font-[500]">
                                        Rolling Diamond
                                    </Link>
                                </li>
                            </ul>
                        )
                    }
                </li>


                <li className="list-none">
                    <Link to="/">
                        <Button className="w-full flex !text-left !justify-start !px-3 !text-[14px] font-[500] !text-black">
                            fashion
                        </Button>
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default Catagorydupli