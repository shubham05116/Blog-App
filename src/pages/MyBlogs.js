import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../store/slices/Blogs/blogDetails';


const MyBlogs = () => {
    const blogDetails= useSelector(state => state.blog.data);
    const dispatch = useDispatch();

    const deleteHandler=(id)=>{
        const filterData = blogDetails.filter((blog) => {
            return blog.id !== id
        })
        dispatch(setBlogs(filterData))
    }

  return (
    <div>
    {
        blogDetails.map((blog )=>{
            return(
                <div>
                    <h1 className='text-3xl font-bold' >{blog.title}</h1>
                    <br />
                    <p>{blog.content}</p>
                    <img src={blog.image} alt={blog.title} />
                    {/* <button onClick={()=>deleteHandler(blog.id)} className='p-2 bg-red-500 rounded-lg text-white'>Delete</button> */}
                    <br />
                </div>
            )
        })
    }
    </div>
  )
}

export default MyBlogs
