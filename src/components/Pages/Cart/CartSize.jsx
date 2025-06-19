import React,{useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';




function CartSize(props) {
    const [sizeanchorEl, setSizeAnchorEl] = useState(null);
    const [selectedSize, setCartSize] = useState(props.size)
    const openSize = Boolean(sizeanchorEl);
    
    const [qtyanchorEl, setQtyAnchorEl] = useState(null);
    const [selectedQty, setCartQty] = useState(props.qty)
    const openQty = Boolean(qtyanchorEl);

    const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };
    const handleClose = (value) => {
        setSizeAnchorEl(null);
        if(value !==null){
            setCartSize(value)
        }
      };


      const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
    };
    const handleCloseQty = (value) => {
        setQtyAnchorEl(null);
        if(value !==null){
            setCartQty(value)
        }
      };

  return (
    <div className="cartitems w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]">
                                <div className='img w-[10%] rounded-md overflow-hidden'>
                                    <Link to="/product/7845" className='group'><img src="./fashion/img2.webp" alt=""
                                        className='w-full group-hover:scale-105 translate-all' />
                                    </Link>
                                </div>
                                <div className="info w-[85%] relative" >
                                    <IoCloseSharp className="text-[22px] cursor-pointer absolute top-[0px] right-[0px] link translate-all" />
                                    <span className='text-[13px]'>Deel band</span>
                                    <h3 className='text-[15px]'><Link className='link font-[500]'>Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set</Link></h3>

                                    <Rating name="size-small" defaultValue={4} size="small" readOnly />


                                    <div className='flex items-center gap-4'>
                                        <div className='relative'>
                                            <span className="flex items-center justify-center bg-slate-300 text-[11px] py-1 font-[600] rounded-md cursor-pointer px-2" onClick={handleClickSize}>Size: {selectedSize}  <GoTriangleDown /></span>
                                            <Menu
                                                id="size-menu"
                                                anchorEl={sizeanchorEl}
                                                open={openSize}
                                                onClose={()=>handleClose(null)}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={()=>handleClose("s")}>s</MenuItem>
                                                <MenuItem onClick={()=>handleClose("M")}>M</MenuItem>
                                                <MenuItem onClick={()=>handleClose("L")}>L</MenuItem>
                                                <MenuItem onClick={()=>handleClose("XL")}>XL</MenuItem>
                                                <MenuItem onClick={()=>handleClose("XXL")}>XXL</MenuItem>

                                            </Menu>
                                        </div>


                                        <div className='relative'>
                                            <span className="flex items-center justify-center bg-slate-300 text-[11px] py-1 font-[600] rounded-md cursor-pointer px-2" onClick={handleClickQty}>Qty: {selectedQty} <GoTriangleDown /></span>
                                            <Menu
                                                id="size-menu"
                                                anchorEl={qtyanchorEl}
                                                open={openQty}
                                                onClose={()=>handleCloseQty(null)}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={()=>handleCloseQty("1")}>1</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("2")}>2</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("3")}>3</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("4")}>4</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("5")}>5</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("6")}>6</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("7")}>7</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("8")}>8</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("9")}>9</MenuItem>
                                                <MenuItem onClick={()=>handleCloseQty("10")}>10</MenuItem>

                                            </Menu>
                                        </div>

                                    </div>



                                    <div className="flex w-full items-center gap-5 mt-2">
                                        <span className="old line-through font-bold text-[14px] text-black-500 ">₹ 70</span>
                                        <span className="new font-bold text-gray-500">₹ 58</span>
                                        <span className="new font-bold text-orange-500"> 55% OFF</span>

                                    </div>
                                </div>
                            </div>
  )
}

export default CartSize