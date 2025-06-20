import { Button } from '@mui/material';
import React from 'react'
import TextField from '@mui/material/TextField';
import AccountSideBar from '../../Accountsidebar/AccountSideBar';

function MyAccount() {
    return (
        <>
            <section className='py-10 w-full '>
                <div className='container flex gap-5'>
                    <div className='col1 w-[20%]'>
                        <AccountSideBar/>
                    </div>

                    <div className='col2 w-[50%]'>
                        <div className='card p-5 bg-white shadow-md rounded-md '>
                            <h2 className='pb-3'>My Profile</h2>
                            <hr />

                            <form className="mt-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-[50%]">
                                        <TextField id="outlined-basic" label="Full Name" variant="outlined"
                                            size="small"
                                            className='w-full' />
                                    </div>

                                    <div className="w-[50%]">
                                        <TextField id="outlined-basic" label="Email" variant="outlined"
                                            size="small"
                                            className='w-full' />
                                    </div>
                                </div>

                                <div className="flex mt-4 items-center gap-5">
                                    <div className="w-[50%]">
                                        <TextField id="outlined-basic" label="Phone Number" variant="outlined"
                                            size="small"
                                            className='w-full' />
                                    </div>
                                </div>


                                <br />


                                <div className="flex items-center gap-12">
                                    <Button className='btn-org btn-lg w-[100px] '>Save</Button>
                                    <Button className='btn-org btn-border btn-lg w-[100px] '>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default MyAccount