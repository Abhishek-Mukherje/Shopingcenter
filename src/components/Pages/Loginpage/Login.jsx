import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../../App';


function Login() {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFill, setFormFill] = useState({
        email: "",
        password: ""
    });

    const context = useContext(MyContext);
    const history = useNavigate();
    const forgotPassword = () => {

        if(formFill.email!=="")
        history("/Verify");
    context.openalart('success',"OTP Send")
    }

    return (
        <>
            <section className='section py-18 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;'>
                <div className="container">
                    <div className="card mt-8 mb-8 shadow-md w-[400px] m-auto rounded-md bg-white p-4 ">

                        <h3 className=" text-center text-[18px] text-black font-[600] mb-10">Login to your account</h3>

                        <form action="w-full">
                            <div className="form-group w-full mb-5">
                                <TextField
                                    type='email' id="email" label="Email Id" name="email" variant="outlined" className='w-[90%]' />
                            </div>
                            <div>
                                <div className="form-group w-full mb-5 relative">


                                    <TextField id="password"
                                        type={isShowPassword === true ? 'password' : 'text'}
                                        label="Password" variant="outlined" name="password" className='w-[90%]' />
                                    <Button className='!absolute top-[9px] right-[50px] z-50 !h-[35px] !w-[35px]!rounded-full !min-w-[25px] !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>

                                        {isShowPassword === false ?

                                            <IoMdEye className='text-[20px] opacity-55' /> : <IoEyeOff className='text-[20px] opacity-55' />

                                        }

                                    </Button>
                                </div>
                                <Link to="/verify" className='link cursor-pointer text-[14px] font-[600]' onClick={forgotPassword}>Forgot Password?</Link>

                                <div className="flex items-center justify-center mt-5 bg-red-600 "><Button className='!text-white !font-[600]'>Login</Button></div>

                                <p className="mt-5">Not Registered? <Link to='/Register' className="text-blue-600 link font-[550]">Sign Up</Link></p>

                                <p className="flex items-center justify-center w-full mt-5 font-[600]">Or continue with social account</p>

                                <div className=" flex mt-5 mb-6">
                                    <Button variant="outlined" className="flex w-full !border-2 " ><p className="flex w-full items-center justify-center gap-2 text-black font-[550]"><FcGoogle className="text-[30px]" />Sign in with Google</p></Button>


                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Login