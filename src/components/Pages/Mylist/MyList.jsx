import React from 'react'
import MyListItems from './MyListItems';
import AccountSideBar from '../../Accountsidebar/AccountSideBar';


function MyList() {


    return (
        <>
            <section className='py-10 w-full '>
                <div className='container flex gap-5'>
                    <div className='col1 w-[20%]'>
                        <AccountSideBar />
                    </div>

                    <div className='col2 w-[60%]'>
                        <div className='shadow-md rounded-md bg-white mb-5'>
                            <div className="py-2 px-3 border-b border[rgba(0,0,0,0.3)]">
                                <h2 className='text-[18px] font-[600]'>My List </h2>
                                <p>There are<span className='text-red-500'> 2 </span>products in your My List
                                </p>
                            </div>

                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                            <MyListItems />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default MyList;