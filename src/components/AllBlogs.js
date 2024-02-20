import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleBlog } from '../store/slices/Blogs/addBlogSlice';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog.data);
    const navigate= useNavigate();

    const detailViewHandler = (id) => {
        const selectedBlog = blogs.find(blog => blog.id === id);
        if (selectedBlog) {
            dispatch(setSingleBlog(selectedBlog));
        }
       navigate(`/detailPage/${id}`)
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                {blogs.map((blog) => (
                    <div key={blog.id} className="border rounded-md p-4">
                        <h1 className="text-xl font-semibold mb-2">{blog.title}</h1>
                        <p className="text-gray-700">{`${blog.content.substring(0,300)}.................`}</p>
                        {blog.image && <img src={blog.image} alt={blog.title} className="mt-4 w-full" />}
                        <br />
                        <button onClick={() => detailViewHandler(blog.id)} className='p-2 bg-blue-400 text-white font-bold rounded-lg' >Full View </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllBlogs;
