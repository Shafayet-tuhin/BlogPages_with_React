import React, { useContext } from 'react'
import { bookContext } from '../contexts/myContext'

const BookMark = () => {

  const { bookmark, time } = useContext(bookContext)

  return (
    <div className='mt-8 ml-6'>

      <div>
        <p className='text-blue-500 font-bold text-2xl px-[3.12rem] py-5 bg-blue-100 border rounded-2xl'>Spent time on read : {time} min</p>
      </div>
<div className='p-6  bg-pink-50 mt-6'>
  
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