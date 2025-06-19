import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";

import "./style.css";
import Catagorydupli from '../../Catagorydupli/Catagorydupli';





function CatagoryPanel(props) {
 
    const toggeleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    }
    
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation " className="catagorypanel " >

            <h3 className=" p-3 text-[14px] font-[500] flex justify-between items-center" > Shop By Categories
                <IoCloseSharp onClick={toggeleDrawer(false)} className="text-[20px]" />
            </h3>

            <Catagorydupli/>

        </Box >
    );

    return (
        <>
            <div>

                <Drawer open={props.isOpenCatPanel} onClose={toggeleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    )
}

export default CatagoryPanel