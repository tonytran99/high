import React, { Component } from 'react';
import RecommendSinglePost from '../layouts/SinglePost/RecommendSinglePost'
class RecommendPost extends Component {
	render() {
		return (
			<div className='post-list'>
                <div className="list-tittle">
                    <h1>RECOMMNED POST</h1>
                </div>

                <div className='divider'></div>		                
                
                {/* Recommend single post */}
                <RecommendSinglePost/>
            </div>	
		);
	}
}

export default RecommendPost