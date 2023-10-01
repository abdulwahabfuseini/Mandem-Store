import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div>
      <img src={`/images/${blog?.cover}`} alt={blog?.name} className='w-full h-52 rounded-xl'/>
     <div className='p-2'>
     <div  className='flex items-center justify-between'>
        <h4>{blog?.date}</h4>
        <h4>{blog?.customer}</h4>
      </div>
      <h1 className='py-4 font-bold'>{blog?.title}</h1>
      <p className='text-md text-slate-500'>{blog?.desc}</p>
     </div>
    </div>
  )
}

export default BlogCard