import React, { useContext } from 'react'
import { bookContext } from '../contexts/myContext'
import SingleBlog from './SingleBlog'



const Blogs = () => {
 
    const {blogs} = useContext(bookContext)

  return (
     <div className=' w-full mx-auto ' >
        {
            blogs.map((item) => (
                <SingleBlog key={item.id} item = {item} />
            ))
        }
     </div>
  )
}

export default Blogs