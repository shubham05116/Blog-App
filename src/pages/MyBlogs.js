import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../store/slices/Blogs/blogDetails';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MyBlogs = () => {
    const blogDetails = useSelector(state => state.blog.data);
    const userId = useSelector(state => state.signUp.userId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editedBlog, setEditedBlog] = useState(null);

    const createBlogHandler = () => {
        navigate('/createBlog')
    }

    const deleteHandler = (id) => {
        const updatedBlogs = blogDetails.filter(blog => blog.id !== id);
        dispatch(setBlogs(updatedBlogs));
    }

    const editHandler = (blog) => {
        setEditedBlog(blog);
    }

    const saveHandler = () => {
        const updatedBlogs = blogDetails.map(blog => {
            if (blog.id === editedBlog.id) {
                return editedBlog;
            }
            return blog;
        });
        dispatch(setBlogs(updatedBlogs));
        setEditedBlog(null);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBlog({ ...editedBlog, [name]: value });
    }

    // Filter blogs based on the logged-in user's ID
    const userBlogs = blogDetails.filter(blog => blog.userId === userId);

    return (
        <div className="">
            <Navbar />
            <div className="text-3xl font-bold mb-4">These are all Your Blogs</div>
            <button onClick={createBlogHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded" type="submit">Create Blog</button>
            <hr className='border-[1px] w-full border-gray-400 mt-5' />
 
            {userBlogs.map((blog, index) => {
                return (
                    <div key={index} className="mb-8">
                        <h1 className="text-3xl font-bold">{blog.title}</h1>
                        {blog.image && <img src={blog.image} alt={blog.title} className="mt-4" />}
                        <p className="mt-2">{blog.content}</p>

                        <button onClick={() => deleteHandler(blog.id)} className="mt-4 p-2 mr-2 bg-red-500 rounded-lg text-white">Delete</button>
                   
                        {!editedBlog || editedBlog.id !== blog.id ? (
                            <button onClick={() => editHandler(blog)} className="mt-4 p-2 bg-green-500 rounded-lg text-white">Edit</button>
                        ) : (
                            <>
                                <textarea name="title" value={editedBlog.title} onChange={handleInputChange} className="mt-2 w-full border rounded px-3 py-2" />
                                <textarea name="content" value={editedBlog.content} onChange={handleInputChange} className="mt-2 w-full border rounded px-3 py-2" />
                                <button onClick={saveHandler} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                            </>
                        )}
                        <br />
                        <hr className='border-[1px] w-full border-gray-400 mt-5' />
                    </div>
                );
            })}
        </div>
    );
}

export default MyBlogs;
