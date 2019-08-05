import React, { Component } from 'react';
import PopularSinglePost from '../SinglePost/PopularSinglePost'
class PopularPost extends Component {
	render(){
		return (
			<div className='right-post'>
                <div className='right-post-header'>
                    <h2 className='right-post-header-txt'>Popular Post</h2>
                </div>
                <div className='list-right-single-post'>
                   {/* Single Post */}
                   <PopularSinglePost/>
                   <PopularSinglePost/>
                   <PopularSinglePost/>
                   <PopularSinglePost/>
                </div>
            </div>
		);
	}
}

export default PopularPost