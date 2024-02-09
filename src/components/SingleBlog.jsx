import React, { useContext } from 'react'
import { images } from '../assets'
import { bookContext } from '../contexts/myContext'



const SingleBlog = ({ item }) => {

  const { addBookmark,removeBookmark} =useContext(bookContext)
  
  

  return (
    <div>
      <div>
        <img src={item.blog_img} alt="" className='w-[52rem] h-[28rem] mt-6 mr-8 ' />
      </div>
      <div>

        <div className='flex gap-[31.55rem] mt-6 '>

          <div className=' flex font-sans jus'>
            <img src={item.author_img} alt="" className='h-14 w-14 border rounded-[3.75rem] mr-9 ' />
            <div>
              <p className='font-bold text-2xl '>{item.author_name}</p>
              <p className='text-gray-600 font-semibold text-base'>{item.published_date}</p>
            </div>
          </div>

          <div className=' flex gap-1 items-center'>
            <p className='text-xl font-medium text-gray-600'>{item.reading_time} min read</p>
            <button onClick={()=>addBookmark(item.id , item.reading_time)} > <img src={images.bookmark} alt="" className='w-6 h-6' /></button>   
          </div>
        </div>
      </div>


      <p className='font-bold text-[2.5rem] text-gray-900 mt-4'>{item.title}</p>

      <div className='flex gap-3 mt-4 font-medium text-xl text-gray-500'>
        {
          item.hashtags.map(item => (
            <p>#{item}</p>
          ))
        }
      </div>
     
     <button className='font-semibold text-xl text-blue-500 mt-5'
    onClick={() => removeBookmark(item.id)}
     > Mark as read </button>

     <hr className='mt-10'/>

    </div>
  )
}

export default SingleBlog