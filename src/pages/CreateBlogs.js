import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setId, setImage, setTitle } from '../store/slices/Blogs/addBlogSlice';
import { setBlogs } from '../store/slices/Blogs/blogDetails';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { setUserId } from '../store/slices/accountSlices/signUpslice';

const CreateBlogs = () => {
    const navigate= useNavigate();

    const title = useSelector(state => state.addBlog.title);
    const content = useSelector(state => state.addBlog.content);
    const image = useSelector(state => state.addBlog.image);
    const blogs = useSelector(state => state.blog.data);
    const id = useSelector(state => state.addBlog.id);
    const userId=useSelector(state=>state.signUp.userId)
    const dispatch = useDispatch();

    // Load image from session storage on component mount
    useEffect(() => {
        const savedImage = sessionStorage.getItem('blogImage');
        if (savedImage) {
            dispatch(setImage(savedImage));
        }
    }, []);

    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
        dispatch(setId(Math.random().toString(36).substr(2, 9)))
    }

    const handleContentChange = (e) => {
        dispatch(setContent(e.target.value));
    }

    const imageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            dispatch(setImage(imageData));
            // Save image data to session storage
            sessionStorage.setItem('blogImage', imageData);
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBlogs([...blogs, {userId, id, title, content, image }]));
        navigate('/myBlogs');
        toast.success('Blog Created Successfully');
        dispatch(setTitle(''));
        dispatch(setContent(''));
        dispatch(setImage(''));
        // Clear image data from session storage
        sessionStorage.removeItem('blogImage');
    }

    const allMyBlogsHandler = () => {
        navigate('/myBlogs')
    }

    return (
        <div className="">
        <Navbar/>
            <h1 className="text-3xl font-bold mb-4">Create a Blog</h1>
              <button onClick={allMyBlogsHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Previous Blogs</button>

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
