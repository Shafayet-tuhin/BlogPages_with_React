import React, { useContext } from 'react'
import { bookContext } from '../contexts/myContext'

const BookMark = () => {

  const { bookmark, time,reset } = useContext(bookContext)

  return (
    <div className='mt-8 ml-6'>

      <div className='flex flex-col gap-4 '>
        <p className='text-[#6047EC] font-bold text-2xl px-[3.12rem] py-5 bg-blue-100 border rounded-2xl border-[#6047EC]'>Spent time on read : {time} min</p>
        <button onClick={()=>reset()}
         className='font-medium text-2xl text-gray-700 px-4 py-3  bg-red-200 border rounded-2xl hover:bg-red-400 hover:text-white'>Clear Reading Time</button>
      </div>
<div className='p-6  bg-gray-100 mt-6 border rounded-3xl'>
  
<div className='flex flex-col gap-4'>

<p className='text-2xl font-bold leading-loose'>Bookmarked Blogs : {bookmark.length} </p>

{
  bookmark.map(el=>(
    <p className='text-xl font-semibold text-gray-900 leading-7 p-5 bg-white border rounded-2xl'> {el.title} </p>
  ))
}
</div>
</div>

    </div>
  )
}

export default BookMark