import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../../App';


function ForgetPage() {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);


    const context = useContext(MyContext);
    const history = useNavigate();



    return (
        <>
            <section className='section py-18 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;'>
                <div className="container">
                    <div className="card mt-8 mb-8 shadow-md w-[400px] m-auto rounded-md bg-white p-4 ">

                        <h3 className=" text-center text-[18px] text-black font-[600] mb-10">Forgot Password</h3>

                        <form action="w-full">
                            <div className="form-group w-full mb-5 relative">
                                <TextField
                                    type={isShowPassword === false ? 'password' : 'text'}
                                    id="password" label="New Password" name="email" variant="outlined"
                                    className='w-[90%]' />


                                <Button className='!absolute top-[9px] right-[50px] z-50 !h-[35px] !w-[35px]!rounded-full !min-w-[25px] !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>

                                    {isShowPassword === false ?

                                        <IoMdEye className='text-[20px] opacity-55' /> : <IoEyeOff className='text-[20px] opacity-55' />

                                    }

                                </Button>


                            </div>
                            <div>
                                <div className="form-group w-full mb-5 relative">


                                    <TextField id="confirm_password"
                                        type={isShowPassword2 === false ? 'password' : 'text'}
                                        label="Confirm Password" variant="outlined" name="password" className='w-[90%]' />

                                    <Button className='!absolute top-[9px] right-[50px] z-50 !h-[35px] !w-[35px]!rounded-full !min-w-[25px] !text-black' onClick={() => setIsShowPassword2(!isShowPassword2)}>

                                        {isShowPassword2 === false ?

                                            <IoMdEye className='text-[20px] opacity-55' /> : <IoEyeOff className='text-[20px] opacity-55' />

                                        }

                                    </Button>


                                </div>


                                <div className="flex items-center justify-center mt-5 bg-red-600 ">
                                    <Button className='!text-white !font-[600]'>Change Password</Button></div>

                                <div className=" flex mt-5 mb-6">
                               


                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section>

        </>
    )
}

export default ForgetPage