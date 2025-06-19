import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Sidebar from '../../components/Sidebar/Sidebar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IoGridSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import { LuMenu } from "react-icons/lu";
import ProductItems from '../Productitems/ProductItems';
import ProductitemsListView from "../ProductitemsListView/ProductitemsListView";





function ProductListing() {

    const [itemView, setItemView] = useState('grid');

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <section className="py-5 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/" className="link transition">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/Fashion" className="link transition">
                        Fashion
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="bg-white p-2 mt-4">
                <div className="container flex gap-3">
                    <div className="sidebarwraper w-[20%] h-full bg-white p-3">
                        <Sidebar />
                    </div>
                    <div className="rightContent w-[80%]">

                        <div className='bg-[#f1f1f1] w-full p-2 mb-2 flex items-center justify-between'>

                            <div className="col1 flex items-center itemViewActions ">
                                <Button className={`!w-[40px] !min-w-[40px] !rounded-full
                             !text-[#000] !h-[40px] ${itemView === "list" && 'active'}`}
                                    onClick={() => setItemView("list")}><LuMenu /></Button>

                                <Button className={`!w-[40px] !min-w-[40px] !rounded-full
                             !text-[#000] !h-[40px] ${itemView === "grid" && 'active'}`} onClick={() => setItemView("grid")}><IoGridSharp /></Button>
                                <span className='text-[14px] flex items-center justify-center font-[500] pl-3'>There are 7 products.</span>
                            </div>
                            <div className='col2 flex items-center justify-center gap-3 pr-4'>
                                <h3 className='text-[14px] font-[500] pl-3'>Short By</h3>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!bg-white !text-[12px] !text-black !capitalize !font-[600] !border-2 !border-[#000]'
                                >
                                    Sales, highest to lowest
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}

                                >
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Sales, highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Relevance</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose} className='!text-[12px] !text-black !capitalize !font-[600]'>Price, high to low</MenuItem>
                                </Menu>

                            </div>
                        </div>
                        <div className={`grid ${itemView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-8 `}>
                            {
                                itemView === 'grid' ?
                                    <>
                                        <ProductItems img={'/fashion/img2.webp'} img2={'/fashion2/img2.webp'} discount={1800} newp={1500} titel={"Poshyaa "} des={'Poshyaa Premium Trendy Tops & Tunics For Women'} />
                                        <ProductItems img={'/fashion/img3.webp'} img2={'/fashion2/img3.webp'} discount={1200} newp={850} titel={"Jainish "} des={'Men Slim Fit Solid Button Down Collar Formal Shirt'} />
                                        <ProductItems img={'/fashion/img4.jpg'} img2={'/fashion2/img4.jpg'} discount={1700} newp={1500} titel={"unity luxure"} des={'Casual Puff Sleeves Solid Women Red Top'} />
                                        <ProductItems img={'/fashion/img8.jpg'} img2={'/fashion2/img8.jpg'} discount={4399} newp={2551} titel={"RARE RABBIT"} des={'Men Alias-N Regular Fit Spread Collar Shirt'} />
                                        <ProductItems img={'/fashion/img6.jpg'} img2={'/fashion2/img6.webp'} discount={490} newp={450} titel={" Georgette Saree (Pink)"} des={'Womens Desinger Printed Trendy Georgette Saree with Blouse Material'} />
                                        <ProductItems img={'/fashion/img7.jpg'} img2={'/fashion2/img7.webp'} discount={480} newp={440} titel={"Watson"} des={'Women Viscose Rayon Kurta Pant Dupatta Set'} />
                                        <ProductItems img={'/fashion/img10.webp'} img2={'/fashion2/img10.jpg'} discount={490} newp={450} titel={"KALRAV JAYPORE "} des={'Womens Viscose Rayon Round Neck & Dupatta Set'} />


                                    </>

                                    :
                                    <>

                                        <ProductitemsListView img={'/fashion/img2.webp'} img2={'/fashion2/img2.webp'} discount={1800} newp={1500} titel={"Poshyaa "} des={'Poshyaa Premium Trendy Tops & Tunics For Women'} />
                                        <ProductitemsListView img={'/fashion/img3.webp'} img2={'/fashion2/img3.webp'} discount={1200} newp={850} titel={"Jainish "} des={'Men Slim Fit Solid Button Down Collar Formal Shirt'} />
                                        <ProductitemsListView img={'/fashion/img4.jpg'} img2={'/fashion2/img4.jpg'} discount={1700} newp={1500} titel={"unity luxure"} des={'Casual Puff Sleeves Solid Women Red Top'} />
                                        <ProductitemsListView img={'/fashion/img8.jpg'} img2={'/fashion2/img8.jpg'} discount={4399} newp={2551} titel={"RARE RABBIT"} des={'Men Alias-N Regular Fit Spread Collar Shirt'} />
                                        <ProductitemsListView img={'/fashion/img6.jpg'} img2={'/fashion2/img6.webp'} discount={490} newp={450} titel={" Georgette Saree (Pink)"} des={'Womens Desinger Printed Trendy Georgette Saree with Blouse Material'} />
                                        <ProductitemsListView img={'/fashion/img7.jpg'} img2={'/fashion2/img7.webp'} discount={480} newp={440} titel={"Watson"} des={'Women Viscose Rayon Kurta Pant Dupatta Set'} />
                                        <ProductitemsListView img={'/fashion/img10.webp'} img2={'/fashion2/img10.jpg'} discount={490} newp={450} titel={"KALRAV JAYPORE "} des={'Womens Viscose Rayon Round Neck & Dupatta Set'} />
                                    </>



                            }


                        </div>

                        <div className='flex items-center justify-center mt-12'>
                        <Pagination count={10}  />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductListing;
