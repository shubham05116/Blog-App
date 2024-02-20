

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../store/slices/Blogs/blogDetails';
import { useNavigate } from 'react-router-dom';

const MyBlogs = () => {
    const blogDetails = useSelector(state => state.blog.data);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const createBlogHandler=()=>{
        navigate('/createBlog')
    }

    return (
        <div className="p-4">
            <div className="text-3xl font-bold mb-4">These are all Your Blogs</div>
            <button onClick={createBlogHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded" type="submit">Create Blog</button>
            <br />
 
            {blogDetails.map((blog, index) => {
                return (
                    <div key={index} className="mb-8">
                        <h1 className="text-3xl font-bold">{blog.title}</h1>
                        <p className="mt-2">{blog.content}</p>
                        {blog.image && <img src={blog.image} alt={blog.title} className="mt-4" />}
                        {/* <button onClick={() => deleteHandler(blog.id)} className="mt-4 p-2 bg-red-500 rounded-lg text-white">Delete</button> */}
                    </div>
                );
            })}
        </div>
    );
}

export default MyBlogs;
