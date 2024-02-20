import React from 'react';
import { useSelector } from 'react-redux';

const DetailPage = () => {
    const singleBlog = useSelector(state => state.addBlog.singleBlog);

    return (
        <div>
            {singleBlog && (
                <div className="p-4">
                    <h1 className="text-3xl font-bold">{singleBlog.title}</h1>
                    <p className="mt-2">{singleBlog.content}</p>
                    {singleBlog.image && <img src={singleBlog.image} alt={singleBlog.title} className="mt-4" />}
                </div>
            )}
            {!singleBlog && <p>No blog selected</p>}
        </div>
    );
}

export default DetailPage;
