import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setContent, setImage, setTitle } from '../store/slices/Blogs/addBlogSlice';
import { setBlogs } from '../store/slices/Blogs/blogDetails';
import { toast } from 'react-toastify';

const CreateBlogs = () => {

    const title= useSelector(state => state.addBlog.title);
    const content= useSelector(state => state.addBlog.content);
    const image= useSelector(state => state.addBlog.image);
    const blogs = useSelector(state => state.blog.data);
   const dispatch = useDispatch();

    const handleTitleChange=(e)=>{
        dispatch(setTitle(e.target.value));
    }

    const handleContentChange=(e)=>{
        dispatch(setContent(e.target.value));
    }

    const imageHandler=(e)=>{
     dispatch(setImage(URL.createObjectURL(e.target.files[0])))
    //  console.log(image)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(setBlogs([...blogs,{title,content,image}]))
        toast.success('Blog Created Successfully')
        dispatch(setTitle(''));
        dispatch(setContent(''));
        dispatch(setImage(''));
    }

  return (
    <div>
        <h1>Create a Blog</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
            className='border-2 border-black p-1 m-1'
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
            />
            </div>
            <div>
            <label htmlFor="content">Content:</label>
            <textarea
            className='border-2 w-[90vw] border-black'
                id="content"
                value={content}
                onChange={handleContentChange}
                rows={'50'}
                col='50'
            ></textarea>
            </div>
            <div>
            <label htmlFor="image">Image:</label>
           
            <input type="file" onChange={imageHandler} className="filetype" />
            </div>
            <button className='border-2 border-blue-400 p-3 m-3 bg-blue-400 text-white font-bold rounded-lg' type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default CreateBlogs
