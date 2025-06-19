import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import Badge from '@mui/material/Badge';
import { IoGitCompareOutline } from "react-icons/io5";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/index';
import { MyContext } from '../../App';
import { Avatar, Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoBagCheckOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


function Header() {

    const context = useContext(MyContext);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <header className='bg-white'>
            <div className=' border-gray-250 h-[40px] border-b-[1px] '>
                <div className='container '>
                    <div className='flex items-center justify-between top-2 relative'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[13px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div>
                            <ul >
                                <li className='flex gap-2 justify-center items-center text-center'>
                                    <Link to={"/help-center"} className='link text-[13px] font-[500] transition'>Help Center </Link>
                                    <span className='text-gray-400 text-center' >|</span>
                                    <Link to="/Oder-Tracking" className="link text-[13px] font-[500] transition">Order Tracking</Link>
                                    <span className='text-gray-400' >|</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* logopart*/}
            <div className="header mt-[5px] py-4 border-b-[1px]">
                <div className="container flex items-center justify-between ">
                    <div className="col1 w-[20%]">
                        <Link to={"/"}><img src='/logo-1691412328.png'></img></Link>
                    </div>

                    <div className="col2 w-[40%]">
                        <Search />

                    </div>

                    <div className="col3  w-[35%] flex items-center">
                        <ul className="flex items-center  w-full ">





                            {/* login switch  */}


                            {
                                context.isLogin === false ? <li className="list-none ">

                                    <Link to={"/Login"} className="link text-[15px] font-[500] transition">Login</Link > | &nbsp;
                                    <Link to="/Register" className="link text-[15px] font-[500]  transition">Register</Link >
                                </li> :


                                    // Login user

                                    (
                                        <>
                                            <Button className="myacc flex items-center !text-[#000]" onClick={handleClick}>
                                                <Button className='logbtn !w-[40px] !h-[40px] min-h[40px] !rounded-full bg-[#fff]'><FaRegUser className='text-black text-[20px] ' /></Button>


                                                <div className="info flex flex-col ">
                                                    <h4 className='text-[14px] leading-3 pb-0 font-[600] text-[rgba(0,0,0,0.7)] capitalize justify-start text-left'>Abhsiehk Mukherjee</h4>
                                                    <span className='text-[13px] font-gray-400  text-[rgba(0,0,0,0.7)] capitalize justify-start text-left'>abhishekmukherjee7492@gmail.com</span>
                                                </div>
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} >
                                                <Link to="/my-account" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <FaRegUserCircle className='text-[18px]' /><span className='text-[14px] font-[500]'>My account</span>
                                                    </MenuItem>
                                                </Link>

                                                
                                                <Link to="/my-orders">
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <IoBagCheckOutline className='text-[18px]' /> <span className='text-[14px] font-[500]'>Orders</span>
                                                    </MenuItem>
                                                </Link>


                                                <Link to="/my-list">
                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <FaRegHeart className='text-[18px]' /> <span className='text-[14px] font-[500]'>My List</span>
                                                    </MenuItem>
                                                </Link>


                                                    <MenuItem onClick={handleClose} className='flex gap-2'>
                                                        <IoLogOutOutline className='text-[18px]' /><span className='text-[14px] font-[500]'>Logout</span>
                                                    </MenuItem>
                                                


                                            </Menu>
                                        </>
                                    )
                            }


                            <Tooltip title="Compare">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <Link to="/"><IoGitCompareOutline className='link' /></Link>
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>



                            <Tooltip title="wishlist">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <Link to="/"><FaRegHeart className='link' /></Link>
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Cart" >
                                <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </ul>
                    </div>
                </div>
            </div>

            <Navigation />

        </header>

    )
}

export default Header;