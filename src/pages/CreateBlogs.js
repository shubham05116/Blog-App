import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setId, setImage, setTitle } from '../store/slices/Blogs/addBlogSlice';
import { setBlogs } from '../store/slices/Blogs/blogDetails';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CreateBlogs = () => {
    const navigate= useNavigate();

    const title = useSelector(state => state.addBlog.title);
    const content = useSelector(state => state.addBlog.content);
    const image = useSelector(state => state.addBlog.image);
    const blogs = useSelector(state => state.blog.data);
    const id = useSelector(state => state.addBlog.id);
    const dispatch = useDispatch();

    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
        dispatch(setId(Math.random().toString(36).substr(2, 9)))
    }

    const handleContentChange = (e) => {
        dispatch(setContent(e.target.value));
    }

    const imageHandler = (e) => {
        dispatch(setImage(URL.createObjectURL(e.target.files[0])))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBlogs([...blogs, {id, title, content,image }]))
navigate('/home')
        toast.success('Blog Created Successfully')
        dispatch(setTitle(''));
        dispatch(setContent(''));
        dispatch(setImage(''));
    }

    const allMyBlogsHandler = () => {
        navigate('/myblogs')
    }

    return (
        <div className="p-4">
        <Navbar/>
            <h1 className="text-3xl font-bold mb-4">Create a Blog</h1>
              <button onClick={allMyBlogsHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Previos Blogs</button>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block">Title:</label>
                    <input
                        className="border-2 border-black p-1 w-full"
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block">Content:</label>
                    <textarea
                        className="border-2 border-black p-1 w-full"
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        rows={10}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block">Image:</label>
                    <input type="file" onChange={imageHandler} className="filetype" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateBlogs;
