import React from 'react'
import '../../assets/css/Main.css'

const Main = () => {
    
    return (
        <div className='main-container flex'>
            <div className='w-full flex flex-col items-center sm:items-start gap-6 sm:gap-10 justify-end px-8 sm:px-28 pb-12 main-content'>
                <div className='flex flex-col items-center sm:items-start gap-2 roboto-bold text-xl sm:text-4xl'>
                    <h1 className='text-white'>The choice is yours.</h1>
                    <h1 className='text-white'>Because they don't have one.</h1>
                </div>
                <button className='bg-white border-none cursor-pointer px-10 py-3 roboto-medium'>QUICK VIEW</button>
            </div>
        </div>
    )
}

export default Main