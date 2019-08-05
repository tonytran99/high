import React from 'react'

const NewSinglePost = ({post}) => {
    return (
        <div className='single-post'>
            <div className='single-post-content'>
                <div className='single-post-title'>
                    {post.title}
                </div>
                
                <div className='author-post'>
                    <span>{post.author}</span>
                </div>
                <div className='date-post'>
                    <span>{post.pubDate}</span>
                </div>
            </div>
            <div className='single-post-img'>
                <img src='upload/blog/img-react.png'/>
            </div>
        </div>
    )
}

export default NewSinglePost