import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

function Register() {

  const [isShowPassword, setIsShowPassword] = useState(false);



  return (
    <>
      <section className='section py-18 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;'>
        <div className="container">
          <div className="card mt-8 mb-8 shadow-md w-[400px] m-auto rounded-md bg-white p-4 ">

            <h3 className=" text-center text-[18px] text-black font-[600] mb-10">Register to your account</h3>

            <form action="w-full">

              <div className="form-group w-full mb-5">
                <TextField
                  type='text' id="name" label="Full Name" variant="outlined" className='w-[90%]' />
              </div>

              <div className="form-group w-full mb-5">
                <TextField
                  type='email' id="email" label="Email Id" variant="outlined" className='w-[90%]' />
              </div>

              <div>
                <div className="form-group w-full mb-5 relative">


                  <TextField id="Password"
                    type={isShowPassword === true ? 'password' : 'text'}
                    label="Password" variant="outlined" className='w-[90%]' />
                  <Button className='!absolute top-[9px] right-[50px] z-50 !h-[35px] !w-[35px]!rounded-full !min-w-[25px] !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>

                    {isShowPassword === false ?

                      <IoMdEye className='text-[20px] opacity-55' /> : <IoEyeOff className='text-[20px] opacity-55' />

                    }

                  </Button>
                </div>

                <div className="form-group w-full mb-5">
                <TextField
                  type='phone' id="phnnumber" label="Mobile" variant="outlined" className='w-[90%]' />
              </div>


                {/* <Link to="/" className='link cursor-pointer text-[14px] font-[600]' >Forgot Password?</Link> */}

                <div className="flex items-center justify-center mt-5 bg-red-600 "><Button className='!text-white !font-[600]'>Register</Button></div>

                <p className="mt-5">Already have an Account? <Link to='/Login' className="text-blue-600 link font-[550]">Login</Link></p>

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

export default Register