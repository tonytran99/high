import React from 'react'

const RecommendSinglePost = () => {
    return (
        <div className='single-post'>
            <div className='single-post-content'>
                <div className='single-post-title'>
                    Getting Started with React-Redux
                        </div>
                <div className='single-post-summary'>
                    <p>
                        Let me set the stage: you’ve come up with a great idea for a web app,
                        and you’ve decided to build it with React.
                    </p>
                </div>
                <div className='author-post'>
                    <span>Mike Hokkin in Free Code Camp</span>
                </div>
                <div className='date-post'>
                    <span>Jul 17, 2019</span>
                </div>
            </div>
            <div className='single-post-img'>
                <img src='upload/blog/img-react.png' />
            </div>
        </div>
    )
}

export default RecommendSinglePost