import React from 'react'
import { images } from '../assets'

const Nav = () => {
    return (
        <div className=' flex items-center justify-between  border-b-2 pb-3'>
            <h1 className='  text-4xl font-bold leading-[4rem] font-mono'>
                Knowledge Cafe
            </h1>
            <img className=' w-[3.75rem] h-[3.75rem]'
                src={images.profile} alt="" />
                
        </div>
    )

}

export default Nav