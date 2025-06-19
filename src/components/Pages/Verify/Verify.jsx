import { useState } from 'react';
import React from 'react'
import OtpBox from '../Otpbox/OtpBox'
import { Button } from '@mui/material';

function Verify() {
    const [otp, setOtp] = useState("");

    const handelOtpChange = (value) => {
        setOtp(value);
    };
    const verityOTP = (e) => {
        e.preventDefault()

    }

    return (
        <>
            <section className='section py-18 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;'>
                <div className="container">
                    <div className="card mt-8 mb-8 shadow-md w-[400px] m-auto rounded-md bg-white p-4 ">
                        <div className='text-center flex items-center justify-center '>
                            <img src="/Verify.png" width="80" alt="" />
                        </div>
                        <p className="text-center mt-2">OTP sent to <span className='font-[600] text-red-500'>abhishekmukherjee7492@gmail.com</span></p>
                        <h3 className='text-center text-[18px] text-black font-[600] mt-4 mb-5'>Verify OTP</h3>

                        <form onSubmit={verityOTP}>
                            <OtpBox length={6} onChange={handelOtpChange} />
                            <div className='flex items-center justify-center mt-5'>
                                <Button type="submit" className='btn-crt !w-full !font-[700]'>Verify OTP</Button>
                            </div>
                        </form>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Verify